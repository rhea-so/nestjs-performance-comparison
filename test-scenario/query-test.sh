bombardier -c 125 -n 100000 -m POST -H 'Content-Type: application/json' -b '{ "operationName": null,"variables": {},"query": "{ blogs(count: 10) { title, content} }" }' http://localhost:3000/graphql