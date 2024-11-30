### How to deploy the npm package to npm registery


```
    1. Make the package name as unique as much as possible
    2. make the version number correct
    3. run npm publish  --access public
```

### Notes

```
    1. Run npm pack. It will download a zip file to get all the files in our deployed npm file.
    2. Even after running the above command, we see that our TS file inside of 'src' also got into package or in module. To avoid TS files, we need to add '. npmignore', in that we need to add our folder name where TS files resides.
    3. Now run the npm pack . Now after unzip the file, we did not see the 'src'  folder and any of TS file.
```