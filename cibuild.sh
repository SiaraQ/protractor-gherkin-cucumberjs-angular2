# start selenium
./node_modules/protractor/bin/webdriver-manager start > /dev/null 2>&1 &

# wait until selenium is up
while ! curl http://localhost:4444/wd/hub/status &>/dev/null; do :; done
