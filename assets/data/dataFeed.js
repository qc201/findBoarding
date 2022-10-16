const dataFeed = [
    {
        title: "test - Alice's family",
        description: "test-1: Your lovely fur friend will sleep in XXX(room), and play with XXX(hoster's pet) for XXX(minutes/hours per day; I will check on him/her XXX(times per hour), and you will have access for a secuirty camera(please address here if it is available).)",
        profile_img: "https://m.media-amazon.com/images/I/41LU4LGUftL._AC_.jpg",
        images:["https://images.squarespace-cdn.com/content/v1/5ebb0ca06dde6c0448082d3d/1597551632467-WIXIRTQOEE9Y5BK93R4Y/two-puppies-starting-to-play.jpg",
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-583708443-1-1558035851.jpg",
                "https://media-be.chewy.com/wp-content/uploads/2019/09/18095916/games-to-play-with-dogs-8.jpg"],
        price_large: "35",
        price_small: "25",
        large_dog: "2",
        small_dog: "4",
        coordinate: {
            latitude: 34.09327083878333, 
            longitude: -118.05845706167507
          },
    },
    {
        title: "test - Bob's family",
        description: "test-2: Your lovely fur friend will sleep in XXX(room), and play with XXX(hoster's pet) for XXX(minutes/hours per day; I will check on him/her XXX(times per hour), and you will have access for a secuirty camera(please address here if it is available).)",
        profile_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVQj4O6Kev2I7TBbGTXFdGiHt_nUb_je43BQ&usqp=CAU",
        images:["https://www.talltailsdog.com/media/amasty/blog/How_Does_Your_Dog_Play-01.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF5Icj5yacsrXbnlCmlkhH6Pnrp0ix5UnJmA&usqp=CAU",
                "https://media-be.chewy.com/wp-content/uploads/2018/05/dog-play-date-tip1-x-670-440x.jpg"],
        price_large: "55",
        price_small: "20",
        large_dog: "1",
        small_dog: "2",
        coordinate: {
            latitude: 34.084732443302045, 
            longitude: -118.03944797434616
          },
    },
    {
        title: "test - Charlie's family",
        description: "test-3: Your lovely fur friend will sleep in XXX(room), and play with XXX(hoster's pet) for XXX(minutes/hours per day; I will check on him/her XXX(times per hour), and you will have access for a secuirty camera(please address here if it is available).)",
        profile_img:"https://cdn.shopify.com/s/files/1/0218/1356/files/Screen_Shot_2022-09-13_at_7.08.29_PM.png?v=1663110527&width=1496",
        images:["https://i.ytimg.com/vi/PjyNnx--xzk/hqdefault.jpg",
                "https://www.thesprucepets.com/thmb/lzKzm54boLl1RNOHJGyFeRvBMiw=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/train-a-dog-to-take-a-bow-1117287_2374-79c77dab65124231bbab4f7542cee51a.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNoNRSVmWwdJA4J0RqVRPDP0CTxalOcSiHBg&usqp=CAU"],
        price_large: "40",
        price_small: "15",
        large_dog: "5",
        small_dog: "10",
        coordinate: {
            latitude: 34.15041269842387, 
            longitude: -118.10283177114371
          },
    },
    {
        title: "test - David's family",
        description: "test-4: Your lovely fur friend will sleep in XXX(room), and play with XXX(hoster's pet) for XXX(minutes/hours per day; I will check on him/her XXX(times per hour), and you will have access for a secuirty camera(please address here if it is available).)",
        profile_img:"https://cdn.shopify.com/s/files/1/2881/0458/files/image_1600x.png?v=1662144879",
        images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8jWq8nIpPXhvI6TTEvjn4UiAoSZ99ma2tQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ZDzNCv1uVeJuDHOV1pFeZ5RAa0nNCwqwpvgbVZNu0Ig3yhr3Og4zzpcfv4XC8oZNAGY&usqp=CAU",
                "https://assets.petco.com/petco/image/upload/f_auto,q_auto/2819327-centre-1"],
        price_large: "75",
        price_small: "50",
        large_dog: "10",
        small_dog: "20",
        coordinate: {
            latitude: 34.08820886697148, 
            longitude: -118.0910784843203
          },
    },
    {
        title: "test - Emma's family",
        description: "test-5: Your lovely fur friend will sleep in XXX(room), and play with XXX(hoster's pet) for XXX(minutes/hours per day; I will check on him/her XXX(times per hour), and you will have access for a secuirty camera(please address here if it is available).)",
        profile_img:"https://foter.com/photos/256/dog-bed-nightstand-with-steps.jpg",
        images:["https://images.wagwalkingweb.com/media/daily_wag/behavior_guides/hero/1534662707.98/why-do-dogs-play-at-your-feet.jpg",
                "https://media-be.chewy.com/wp-content/uploads/2018/05/dog-play-date-tip8-x-670-440x.jpg",
                "https://canna-pet.com/wp-content/uploads/2019/06/DogToysFT-1024x683.jpg"],
        price_large: "40",
        price_small: "15",
        large_dog: "1",
        small_dog: "1",
        coordinate: {
            latitude: 34.06317543095938, 
            longitude: -118.09065872407662
          },
    },
    {
        title: "test - Fernando's family",
        description: "test-6: Your lovely fur friend will sleep in XXX(room), and play with XXX(hoster's pet) for XXX(minutes/hours per day; I will check on him/her XXX(times per hour), and you will have access for a secuirty camera(please address here if it is available).)",
        profile_img:"https://www.outdoorlife.com/uploads/2021/12/21/Orvis_ComfortFill.gif?auto=webp&width=800&crop=16:10,offset-x50",
        images:["https://www.talltailsdog.com/media/amasty/blog/cache/f/i/400/270/finn_thepiebald_5_.jpeg",
                "https://images.wagwalkingweb.com/media/daily_wag/behavior_guides/why-do-dogs-always-play-fight/hero/Why-Do-Dogs-Always-Play-Fight.jpg",
                "https://www.rover.com/blog/wp-content/uploads/2016/05/ball-jrt-header-960x540.jpg"],
        price_large: "50",
        price_small: "30",
        large_dog: "2",
        small_dog: "4",
        coordinate: {
            latitude: 34.06873905609417,
            longitude: -118.04322581653939
          },
    },
    {
        title: "test - Grace's family",
        description: "test-7: Your lovely fur friend will sleep in XXX(room), and play with XXX(hoster's pet) for XXX(minutes/hours per day; I will check on him/her XXX(times per hour), and you will have access for a secuirty camera(please address here if it is available).)",
        profile_img:"https://static.onecms.io/wp-content/uploads/sites/47/2020/10/02/mid-century-dog-sofa-2000.jpg",
        images:["https://canna-pet.com/wp-content/uploads/2019/06/DogPlayingWithFood1.jpg",
                "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/544112-flickr-fb56dcb33f4993dd61f0e0d1985feafa.jpg",
                "https://904765.smushcdn.com/2172277/wp-content/uploads/2022/06/dog-play-equipment-leashpost.jpg?lossy=1&strip=1&webp=1"],
        price_large: "45",
        price_small: "25",
        large_dog: "5",
        small_dog: "6",
        coordinate: {
            latitude: 34.06873905609417, 
            longitude: -118.05371982263169
          },
    }
]