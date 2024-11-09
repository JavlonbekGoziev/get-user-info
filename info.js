function userdata(userId) {

    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;


return fetch(url) 
    .then(response => {
        if(!response.ok) {
            throw new Error('no info')
        }
        return response.json()
    })

    .then(data => {
        return data
    })
    .catch(error => {
        console.error("Error :", error)
        throw error
    })

}
    userdata(2)
        .then(response => {
            console.log('its worked',response)
        })
        .catch(error => {
            console.error("Error",error)
        })
    


        // Output: 

        // It worked! Data: {
        //     "id": 2,
        //     "name": "Ervin Howell",
        //     "username": "Antonette",
        //     "email": "Antonette@fakemail.com",
        //     "address": {
        //       "street": "Victor Plains",
        //       "suite": "Suite 879",
        //       "city": "Wisokyburgh",
        //       "zipcode": "90566-7771",
        //       "geo": {
        //         "lat": "29.4572",
        //         "lng": "-164.2990"
        //       }
        //     },
        //     "phone": "1-770-736-8031 x56442",
        //     "website": "anastasia.net",
        //     "company": {
        //       "name": "Deckow-Crist",
        //       "catchPhrase": "Proactive didactic contingency",
        //       "bs": "facilitate integrated interfaces"
        //     }
        //   }
          