
async function getUserData(userId) {

    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Error to take user info');
      }
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error('Error: ', error); 
      throw error;
    }
  }
  
//   Usage, fetch id 1

  getUserData(1)
    .then(userData => {
              console.log('User Data:', userData); 
    })
    .catch(error => {
      console.error('Error:', error); 
        });
  

    // output

    // User data: {
    //     id: 1,
    //     name: 'Leanne Graham',
    //     username: 'Bret',
    //     email: 'Sincere@april.biz',
    //     address: {
    //       street: 'Kulas Light',
    //       suite: 'Apt. 556',
    //       city: 'Gwenborough',
    //       zipcode: '92998-3874',
    //       geo: { lat: '-37.3159', lng: '81.1496' }
    //     },
    //     phone: '1-770-736-8031 x56442',
    //     website: 'hildegard.org',
    //     company: {
    //       name: 'Romaguera-Crona',
    //       catchPhrase: 'Multi-layered client-server neural-net',
    //       bs: 'harness real-time e-markets'
    //     }
    //   }