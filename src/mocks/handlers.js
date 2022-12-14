// src/mocks/handlers.js
import { rest } from 'msw';

export const dataMock = {
  "results":[
     {
        "gender":"female",
        "name":{
           "title":"Mrs",
           "first":"Marisela",
           "last":"Báez"
        },
        "location":{
           "street":{
              "number":5276,
              "name":"Continuación Comoras"
           },
           "city":"Piste",
           "state":"Estado de Mexico",
           "country":"Mexico",
           "postcode":44784,
           "coordinates":{
              "latitude":"23.2138",
              "longitude":"80.4623"
           },
           "timezone":{
              "offset":"+5:30",
              "description":"Bombay, Calcutta, Madras, New Delhi"
           }
        },
        "email":"marisela.baez@example.com",
        "login":{
           "uuid":"a15b8795-6dfd-41f4-8f2b-b66172be23fa",
           "username":"sadpanda481",
           "password":"binladen",
           "salt":"Y01f8qd8",
           "md5":"fb6fe59f73e8ee07ced2df79f3c8b11a",
           "sha1":"599da25fbfeb297ffd6871f0426084fe67fb61ef",
           "sha256":"616ea71df7281754cf7b383d70e6d171b32e58ce24f9e0e41aca8b0ed97e23a6"
        },
        "dob":{
           "date":"1968-03-11T23:38:43.044Z",
           "age":54
        },
        "registered":{
           "date":"2004-04-15T20:55:31.562Z",
           "age":18
        },
        "phone":"(617) 912 9621",
        "cell":"(685) 205 9142",
        "id":{
           "name":"NSS",
           "value":"74 67 18 1992 2"
        },
        "picture":{
           "large":"https://randomuser.me/api/portraits/women/44.jpg",
           "medium":"https://randomuser.me/api/portraits/med/women/44.jpg",
           "thumbnail":"https://randomuser.me/api/portraits/thumb/women/44.jpg"
        },
        "nat":"MX"
     },
     {
        "gender":"female",
        "name":{
           "title":"Ms",
           "first":"Nina",
           "last":"Nogueira"
        },
        "location":{
           "street":{
              "number":9764,
              "name":"Rua São Luiz "
           },
           "city":"Itaquaquecetuba",
           "state":"Maranhão",
           "country":"Brazil",
           "postcode":93980,
           "coordinates":{
              "latitude":"-41.5596",
              "longitude":"-118.7364"
           },
           "timezone":{
              "offset":"+4:30",
              "description":"Kabul"
           }
        },
        "email":"nina.nogueira@example.com",
        "login":{
           "uuid":"d9418f26-3b6a-4c2c-aef3-30ebafafc65e",
           "username":"crazyelephant727",
           "password":"iceman",
           "salt":"SUy2RDBl",
           "md5":"fdebc9e365a0c97fdffeb5c7451fcd77",
           "sha1":"73026f74e282892b33e973e63d92ddcdf469b0ab",
           "sha256":"3545e8f1a4789cea87337825b3d68a441c100b63f549cb92ab0789997fdc42b8"
        },
        "dob":{
           "date":"1997-07-16T09:21:03.738Z",
           "age":25
        },
        "registered":{
           "date":"2005-09-03T09:26:02.644Z",
           "age":17
        },
        "phone":"(15) 1073-6307",
        "cell":"(42) 5463-0475",
        "id":{
           "name":"CPF",
           "value":"203.155.153-67"
        },
        "picture":{
           "large":"https://randomuser.me/api/portraits/women/61.jpg",
           "medium":"https://randomuser.me/api/portraits/med/women/61.jpg",
           "thumbnail":"https://randomuser.me/api/portraits/thumb/women/61.jpg"
        },
        "nat":"BR"
     },
     {
        "gender":"male",
        "name":{
           "title":"Mr",
           "first":"Lucien",
           "last":"Aubert"
        },
        "location":{
           "street":{
              "number":19,
              "name":"Rue Victor-Hugo"
           },
           "city":"Montpellier",
           "state":"Haute-Savoie",
           "country":"France",
           "postcode":65553,
           "coordinates":{
              "latitude":"39.3326",
              "longitude":"92.8053"
           },
           "timezone":{
              "offset":"+11:00",
              "description":"Magadan, Solomon Islands, New Caledonia"
           }
        },
        "email":"lucien.aubert@example.com",
        "login":{
           "uuid":"6db77274-4be2-4a38-a1c6-b50c6397a516",
           "username":"angrypanda612",
           "password":"tophat",
           "salt":"kfbt9kX4",
           "md5":"25773189077e6dcf73d6cd004fe5ae94",
           "sha1":"ec6a7f663c8d79cadd3c8a91932f9c2a4771d82c",
           "sha256":"cf20619ccbf8e9d28b0e801a0b6f41e4f1124ff0d94484a28cd3734cad55355b"
        },
        "dob":{
           "date":"1952-12-11T23:39:24.457Z",
           "age":70
        },
        "registered":{
           "date":"2013-03-04T23:31:23.110Z",
           "age":9
        },
        "phone":"04-43-21-83-97",
        "cell":"06-77-50-14-84",
        "id":{
           "name":"INSEE",
           "value":"1521192543858 62"
        },
        "picture":{
           "large":"https://randomuser.me/api/portraits/men/31.jpg",
           "medium":"https://randomuser.me/api/portraits/med/men/31.jpg",
           "thumbnail":"https://randomuser.me/api/portraits/thumb/men/31.jpg"
        },
        "nat":"FR"
     },
     {
        "gender":"female",
        "name":{
           "title":"Mademoiselle",
           "first":"Alisha",
           "last":"Rodriguez"
        },
        "location":{
           "street":{
              "number":3934,
              "name":"Rue Denfert-Rochereau"
           },
           "city":"Grandval",
           "state":"St. Gallen",
           "country":"Switzerland",
           "postcode":4900,
           "coordinates":{
              "latitude":"45.8399",
              "longitude":"14.0093"
           },
           "timezone":{
              "offset":"-11:00",
              "description":"Midway Island, Samoa"
           }
        },
        "email":"alisha.rodriguez@example.com",
        "login":{
           "uuid":"30528828-6bb6-4780-b0f8-692105f2cee0",
           "username":"bluebutterfly616",
           "password":"snoopy",
           "salt":"OkzXJARr",
           "md5":"3861bf0176b11134b97bf17998b60ee2",
           "sha1":"2bef56fa52f0058e491fd6ea2403371fdf3ec641",
           "sha256":"f21196cf5ce8cd4f1bd0b5ba7f5522fda239d359026cd73d9232722df80bf9bc"
        },
        "dob":{
           "date":"1983-08-09T20:33:37.238Z",
           "age":39
        },
        "registered":{
           "date":"2017-08-07T14:21:42.034Z",
           "age":5
        },
        "phone":"078 812 76 83",
        "cell":"076 043 04 14",
        "id":{
           "name":"AVS",
           "value":"756.0121.4934.09"
        },
        "picture":{
           "large":"https://randomuser.me/api/portraits/women/74.jpg",
           "medium":"https://randomuser.me/api/portraits/med/women/74.jpg",
           "thumbnail":"https://randomuser.me/api/portraits/thumb/women/74.jpg"
        },
        "nat":"CH"
     }
  ],
  "info":{
     "seed":"2b0af772efab945b",
     "results":4,
     "page":1,
     "version":"1.4"
  }
}

export const handlers = [
  // Handles a GET /user request
  rest.get('https://randomuser.me/api', (rew, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(dataMock),
    )
  }),
]
