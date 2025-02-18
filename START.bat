@echo off
start cmd /k "cd backend && dotnet run"
start cmd /k "cd frontend && npm start"
exit
