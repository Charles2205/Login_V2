@echo off
setlocal enabledelayedexpansion

rem Define the start day (August 17th)
set start_day=17

rem Get today's day as an integer
for /f "tokens=2 delims==" %%i in ('wmic path win32_localtime get day /value') do set today=%%i

rem Loop through the dates from 17th August to today's date
for /L %%i in (%start_day%,1,%today%) do (
    rem Format the day to ensure it has two digits (e.g., 17, 18, ..., today)
    set day=%%i
    if %%i LSS 10 set day=0%%i

    rem Set the commit date
    set GIT_COMMITTER_DATE=2024-08-!day!T12:00:00
    set GIT_AUTHOR_DATE=2024-08-!day!T12:00:00

    rem Generate a commit message
    set commit_message=Backdated commit for 2024-08-!day!

    rem Create a dummy change (if needed)
    echo "Update for 2024-08-!day!" > file-!day!.txt
    git add file-!day!.txt

    rem Make the commit
    git commit --allow-empty --date "!GIT_AUTHOR_DATE!" -m "!commit_message!"

    rem Optional: Delete the dummy file (if created)
    del file-!day!.txt
)

endlocal
