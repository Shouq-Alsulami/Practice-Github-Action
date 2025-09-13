#!/bin/bash

#src/test.sh
EXPECTED="hello, test !"

OUTPUT=$(node -e "consule.log(require('./src/app')('test'))")

if ["$OUTPUT" == "$EXPECTED"]; then

echo "Test passed✅"

exit 0

else

echo "Test Failed❌"

exit 1

fi
