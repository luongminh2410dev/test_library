## How to make the project running ?

1. Clone this project

2. Install **node_modules** with `npm install` or `yarn`

3. Running project:
    ```
    npm run ios
    ```
    
    or
    
    ```
    npm run android
    ```
    
4. Build file `.apk`:
    - `cd project`
    - `cd android`
    - `./gradlew clean`
    - `./gradlew assembleRelease`
    
5. Build file `.ipa`: use Xcode...
