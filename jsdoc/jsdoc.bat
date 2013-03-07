echo ""
echo " * JSDoc Generation Batch Script!"
echo ""
echo "   In  : ["$2"]"
echo "         ["$3"]"
echo "         ["$4"]"
echo ""
echo "   Out : ["$1"]"
echo ""
BASEDIR=C:\\Users\\bgoodson\\Desktop\\com\\google\\jsdoc-toolkit
java \
	-jar $BASEDIR\\jsrun.jar $BASEDIR\\app\\run.js \
	-t=$BASEDIR\\templates\\jsdoc \
	-d=$1 -a $2 $3 $4
echo " * Done."