### Backend

- Install requirements after creating and activating virtual environement

    $ pip install -r requirements/local.txt

- Currently SQLite is configured, you can change it with any other as well. Then run

    $ python manage.py makemigrations
        $ python3 manage.py migrate

    To run tests:
        $ pytest

    API Documentation will be available at http://localhost:8000/api/v1/schema/redoc/

    Admin available at`http://localhost:8000/admin/`

### Frontend
    -  cd frontend # optional
    -  npm i
    -  npm start
    -  React app available at`http://localhost:3000/`

