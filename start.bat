@echo off
rem ============================================================
rem  VELLORA HEALTH - local website launcher
rem  Double-click this file to start the site and open it in
rem  your default browser. The server keeps running afterwards.
rem  No administrator rights required.
rem ============================================================
setlocal EnableDelayedExpansion
cd /d "%~dp0"
set "PORT=5173"
set "URL=http://localhost:%PORT%/"

echo.
echo  ================================================
echo   VELLORA HEALTH - starting local website...
echo  ================================================
echo.

rem ---- 1. Node.js available? ----
where node >nul 2>nul
if errorlevel 1 (
  echo  [ERROR] Node.js was not found.
  echo.
  echo  Please install Node.js 18 or newer from https://nodejs.org/
  echo  then double-click start.bat again.
  echo.
  pause
  exit /b 1
)
for /f "tokens=*" %%v in ('node --version') do echo  [OK] Found %%v

rem ---- 2. Project files present? ----
if not exist "package.json" (
  echo  [ERROR] package.json not found in "%~dp0".
  echo  start.bat must stay inside the Hospital project folder.
  pause
  exit /b 1
)
if not exist "src\App.tsx" (
  echo  [ERROR] src\App.tsx not found - project looks incomplete.
  pause
  exit /b 1
)

rem ---- 3. Dependencies installed? (install once, only if missing) ----
if not exist "node_modules\vite\bin\vite.js" (
  echo.
  echo  Dependencies are missing - installing once now.
  echo  This needs an internet connection and may take a few minutes.
  echo.
  where npm >nul 2>nul
  if errorlevel 1 (
    echo  [ERROR] npm was not found alongside Node.js.
    pause
    exit /b 1
  )
  call npm install
  if errorlevel 1 (
    echo.
    echo  [ERROR] npm install failed. Check your connection and try again.
    pause
    exit /b 1
  )
  if not exist "node_modules\vite\bin\vite.js" (
    echo  [ERROR] Installation finished but Vite is still missing.
    pause
    exit /b 1
  )
)
echo  [OK] Dependencies present.

rem ---- 4. Is our port already serving this project? ----
set "ALREADY_RUNNING=0"
powershell -NoProfile -NonInteractive -Command "try { $r = Invoke-WebRequest -Uri '%URL%' -TimeoutSec 4 -UseBasicParsing; if ($r.StatusCode -eq 200 -and $r.Content -match 'Vellora|id=\"root\"') { exit 0 } else { exit 1 } } catch { exit 1 }"
if not errorlevel 1 (
  set "ALREADY_RUNNING=1"
  echo  [OK] The website already appears to be running on port %PORT%.
  goto :openbrowser
)

rem ---- 4b. Port busy with something else? Then use the next free port. ----
netstat -ano -p tcp ^| findstr "LISTENING" ^| findstr ":%PORT% " >nul 2>nul
if not errorlevel 1 (
  echo  [INFO] Port %PORT% is busy with another program - trying 5174.
  set "PORT=5174"
  set "URL=http://localhost:5174/"
)

rem ---- 5. Start the Vite dev server in its own persistent window ----
echo  [..] Starting server on !URL! ...
start "Vellora Health Server - do not close while browsing" /min cmd /c "node node_modules\vite\bin\vite.js dev --port !PORT! --strictPort --host 127.0.0.1"

rem ---- 6. Bounded readiness check (max ~45 seconds) ----
set "READY=0"
for /L %%i in (1,1,15) do (
  powershell -NoProfile -NonInteractive -Command "try { $r = Invoke-WebRequest -Uri '!URL!' -TimeoutSec 3 -UseBasicParsing; if ($r.StatusCode -eq 200) { exit 0 } else { exit 1 } } catch { exit 1 }"
  if not errorlevel 1 (
    set "READY=1"
    goto :openbrowser
  )
  echo  [..] Waiting for the server... (%%i/15^)
  timeout /t 3 /nobreak >nul
)

echo.
echo  [WARN] The server did not respond in time.
echo  A server window was opened - check it for error messages.
echo  If it shows "ready", open !URL! manually in your browser.
echo.
pause
exit /b 1

:openbrowser
echo.
if "%ALREADY_RUNNING%"=="1" (
  echo  Opening the already-running site...
) else (
  if "%READY%"=="1" echo  [OK] Server is ready.
  echo  Opening the website in your browser...
)
start "" "%URL%"
echo.
echo  The website should now be open at %URL%
echo  The server keeps running in its own window.
echo  To stop it later, close that window or press Ctrl+C inside it.
echo.
if "%ALREADY_RUNNING%"=="1" pause
endlocal
exit /b 0
