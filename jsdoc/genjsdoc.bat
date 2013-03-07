echo ""
echo "* Automated Micro-MVC JSDoc Generator!"
BASEDIR=C:\\Users\\bgoodson\\Desktop\\com\\blgse\\micro-mvc
DS=$BASEDIR\\DataStructures.js
MVCSS=$BASEDIR\\MVCSubSystem.js
MYAPP=$BASEDIR\\MyApp.js
IN="${DS} ${MVCSS} ${MYAPP}"
OUT=$BASEDIR\\jsdoc
jsdoc.bat $OUT $IN
