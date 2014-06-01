cp -R dist $HOME/dist
cp -R package.json $HOME/package.json

cd $HOME
git clone https://github.com/lucianlature/data-structures.git --branch=master master
cd master
git remote rm origin
git remote add origin https://lucianlature:${GH_TOKEN}@github.com/lucianlature/data-structures.git

rm -rf dist
mkdir dist
cd dist
cp -Rf $HOME/dist/* .
cd ..
cp -Rf $HOME/package.json package.json

git add -f .
git commit -m "Travis dist $TRAVIS_BUILD_NUMBER pushed to master"
git push -fq origin master
echo -e "Done with magic\n"
