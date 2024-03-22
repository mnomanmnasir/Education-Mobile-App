import { request, gql } from 'graphql-request'


const MASTER_URL = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cltsyv4nx04oz07use2juia6e/master"

const getSlider = async () => {

  const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
      
    `
  const result = await request(MASTER_URL, query)
  return result
}

const getCategory = async () => {
  const query = gql`


 query GetCategory {
    categories {
      id
      name
      icon {
        url
      }
    }
  }
  
 `

  const result = await request(MASTER_URL, query)
  return result
}


const getBusinessList = async () => {
  const query = gql`
query getBusinessList {
  businessLists {
    id
    name
    email
    contactPerson
    categorie {
      name
    }
    address
    about
    images {
      url
    }
  }
}

`

  const result = await request(MASTER_URL, query)
  return result


}

const getBusinessListCategory = async (categorie) => {
  const query = gql`
  
  query getBusinessList {
    businessLists(where: {categorie: {name: "`+ categorie + `"}}) {
      id
      name
      email
      contactPerson
      categorie {
        name
      }
      address
      about
      images {
        url
      }
    }
  }

  
  `

  const result = await request(MASTER_URL, query)
  return result
}


const createBooking = async (data) => {

  const mutationQuery = gql`
  mutation createBooking {
    createBooking(
      data: {bookingStatus: Booked, 
        businessList:{
          connect: {id: "`+ data.businessId + `"}}, 
      date: "`+ data.date + `", 
      time: "`+ data.time + `", 
      userEmail: "`+ data.userEmail + `", 
      userName: "`+ data.userName + `"}
    ) {
      id
    }
    publishManyBookings(to: PUBLISHED) {
      count
    }
  }
  
  `

  const result = await request(MASTER_URL, mutationQuery)
  return result

}


const getUserBooking = async (userEmail) => {
  const query = gql`

 query GetUserBooking {
  bookings(orderBy: publishedAt_DESC, where: {userEmail: "`+ userEmail + `"}) {
    time
    userEmail
    userName
    bookingStatus
    date
    id
    businessList {
      id
      images {
        url
      }
      name
      address
      contactPerson
      email
      about
    }
  }
}

`

  const result = await request(MASTER_URL, query)
  return result

}


export default {
  getSlider,
  getCategory,
  getBusinessList,
  getBusinessListCategory,
  createBooking,
  getUserBooking
}