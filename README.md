## How to run a project?

```bash
npm install #make sure all deps are installed
json-server --watch db.json --port 3000 # mock db
npm run dev # run app in dev mode
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Additional info

#### Issues, that I have not addressed, because of time limitation:
- global product state using redux (so user has to refresh after add, delete and edit actions to see the changes
- there's also a bug, that after adding a new product (because of its id does not auto increment), user cannot delete any product, because the route of json-server returns 404 (tried to debug, but couldn't resolved fast, skipped)
- comments on products

## Some project design considerations

- I opted for a `flat` layout for the application folder structure, avoiding deep nesting since the project is small. So, i didn't introduced features/ folder, instead i placed all logic sorted by folders at the root.

- I decided to use Tailwind CSS for styling, as it suits a small project without complex animations.

- I introduced linting and formatting from the start of the project.



## P.S.
Thank you, because it was really fun to bring this project to life and I gained some real interesting insights for myself on how to approach such tasks.


