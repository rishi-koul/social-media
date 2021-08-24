# social-media

Run the code by using: 
  ``` yarn run dev ```

# Dependencies

* Pls create additional ```config.env``` and ```next.config.js``` files at the root of the project

  * In the config.env file add this:

    ```MONGO_URI={YOUR MONGODB URL}```

  * In the next.config.js add this:
    ```
    module.exports={
        env:{
            CLOUDINARY_URL:{YOUR CLOUDINARY URL}
        }
    } 
    ```

    Note: Pls create a Cloudinary account to get the url

* Install rest of the dependencies using ```yarn add```
