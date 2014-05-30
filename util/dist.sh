  cp -R dist $HOME/dist
  cd $HOME

  git config --global user.email "lucian.lature@gmail.com"
  git config --global user.name "lucianlature"
  git clone https://lucianlature:bdff5a7db8f45cb829d00af184316ca3b11ff78e@github.com/lucianlature/data-structures.git --branch=master master

  cd master
  git remote rm origin
  git remote add origin https://lucianlature:bdff5a7db8f45cb829d00af184316ca3b11ff78e@github.com/lucianlature/data-structures.git

  mkdir dist
  cd dist
  cp -Rf $HOME/dist/* .

  git add -f .
  git commit -m "Travis dist $TRAVIS_BUILD_NUMBER pushed to master"
  git push -fq origin master
  echo -e "Done with magic\n"
