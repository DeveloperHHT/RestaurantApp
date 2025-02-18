@echo off
start cmd /k "cd backend && dotnet build && dotnet run" 
start cmd /k "cd frontend && npm start"
exit
