import { exec } from "child_process";

const PORT = process.env.PORT || 8080;

const killProcess = process.platform === "win32"
    ? `for /f "tokens=5" %a in ('netstat -ano ^| findstr :${PORT}') do taskkill /PID %a /F`
    : `fuser -k ${PORT}/tcp`;

exec(killProcess, (err) => {
    if (err) {
        console.log(`Port ${PORT} is free or couldn't be freed.`);
        return;
    }
    console.log(`Killed process using port ${PORT}`);
});