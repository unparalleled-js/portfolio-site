# Portfolio Site

My portfolio website on Google Cloud Kit.

Go into build directory

    cd build

    gcloud init

Set permissions (if you haven't done so):

    gsutil acl ch -u AllUsers:R gs://www.juliyasmith.com
    gsutil defacl set public-read gs://www.juliyasmith.com

Upload:

    gsutil rsync -R . gs://www.juliyasmith.com

Set Pages:

    gsutil web set -m index.html -e 404.html gs://www.juliyasmith.com

[Go to site](http://www.juliyasmith.com)
