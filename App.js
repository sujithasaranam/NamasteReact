import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

/*
*Header
- Logo
- Nav Header
*Body
- Search
- RestaurantContainer
    - RestaurantCard
        - Img
        - Name of the Res, Star Rating, Cuisines
*Footer
- Copyright
- Links
- Address
- Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="data:image/jpeg;base64,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"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Name</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const resCardData = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "857826",
      name: "Ibaco",
      cloudinaryImageId: "10509e4b46b73c480c4176b92c8d3354",
      locality: "KATHIPARA",
      areaName: "Guindy",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Bakery"],
      avgRating: 4.8,
      veg: true,
      parentId: "3481",
      avgRatingString: "4.8",
      totalRatingsString: "164",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 6.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "6.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-17 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Icecream.pngImage preview",
            description: "Delivery!",
          },
          {
            imageId: "newg.pngImage preview",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId:
                    "Ratnesh_Badges/Rx_Awards_2025/Icecream.pngImage preview",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.pngImage preview",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8d074791-05cb-44e3-b0eb-25db45e923d8",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/ibaco-kathipara-guindy-rest857826",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "987161",
      name: "Sangeetha Veg Restaurant",
      cloudinaryImageId:
        "qnhrndg6z4ru0kzvatkl",
      locality: "Thyagaraya Nagar",
      areaName: "T Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Thalis"],
      avgRating: 4.7,
      parentId: "1260",
      avgRatingString: "4.7",
      totalRatingsString: "5.6K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-17 22:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.pngImage preview",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId:
                    "bolt/big%20rx%20listing%2015%20mins%20.pngImage preview",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "891",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8d074791-05cb-44e3-b0eb-25db45e923d8",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/sangeetha-veg-restaurant-thyagaraya-nagar-t-nagar-rest987161",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "18045",
      name: "A2B - Adyar Ananda Bhavan",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/34dc4475-26fb-4001-81fc-a1a3805d14a4_18045.jpg",
      locality: "Thyagaraya Nagar",
      areaName: "T Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "Sweets", "Chinese"],
      avgRating: 4.5,
      veg: true,
      parentId: "22",
      avgRatingString: "4.5",
      totalRatingsString: "44K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-17 07:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20RX%20listing%2018px.pngImage preview",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Mithai.pngImage preview",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-South%20Indian.pngImage preview",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20RX%20listing%2018px.pngImage preview",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Mithai.pngImage preview",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-South%20Indian.pngImage preview",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "4.2K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8d074791-05cb-44e3-b0eb-25db45e923d8",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/a2b-adyar-ananda-bhavan-thyagaraya-nagar-t-nagar-rest18045",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "558222",
      name: "Geetham Veg restaurant",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/14/c6faebc3-727d-4fc1-b0b4-7e9df5dd757b_558222.jpg",
      locality: "Thyagaraya Nagar",
      areaName: "T Nagar",
      costForTwo: "₹450 for two",
      cuisines: [
        "South Indian",
        "North Indian",
        "Chinese",
        "Sweets",
        "Snacks",
        "Beverages",
      ],
      avgRating: 4.7,
      parentId: "335557",
      avgRatingString: "4.7",
      totalRatingsString: "48K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-17 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.pngImage preview",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-South%20Indian.pngImage preview",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId:
                    "bolt/big%20rx%20listing%2015%20mins%20.pngImage preview",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-South%20Indian.pngImage preview",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "23K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8d074791-05cb-44e3-b0eb-25db45e923d8",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/geetham-veg-restaurant-thyagaraya-nagar-t-nagar-rest558222",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "454403",
      name: "Chaayos Chai+Snacks=Relax",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/f92c604d-68cb-49db-8dec-9473650c363d_454403.JPG",
      locality: "Rangarajapuram Main Road",
      areaName: "Kodambakkam",
      costForTwo: "₹250 for two",
      cuisines: [
        "Bakery",
        "Beverages",
        "Chaat",
        "Desserts",
        "Home Food",
        "Italian",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "Sweets",
      ],
      avgRating: 4.6,
      parentId: "281782",
      avgRatingString: "4.6",
      totalRatingsString: "3.9K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-17 07:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹94",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8d074791-05cb-44e3-b0eb-25db45e923d8",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/chaayos-chai-snacks-relax-rangarajapuram-main-road-kodambakkam-rest454403",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "117303",
      name: "Mambalam Annashree",
      cloudinaryImageId: "hw5ngo5fpd2yvegty6zw",
      locality: "Thyagaraya Nagar",
      areaName: "T Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["South Indian", "North Indian", "Chinese"],
      avgRating: 4.4,
      veg: true,
      parentId: "17959",
      avgRatingString: "4.4",
      totalRatingsString: "39K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-18 05:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.pngImage preview",
            description: "bolt!",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId:
                    "bolt/big%20rx%20listing%2015%20mins%20.pngImage preview",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹42",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.4",
          ratingCount: "483",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8d074791-05cb-44e3-b0eb-25db45e923d8",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/mambalam-annashree-thyagaraya-nagar-t-nagar-rest117303",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "23202",
      name: "Shri Balaajee Bhavan",
      cloudinaryImageId: "checlpeshnx4porwdi7s",
      locality: "Sir Thyagaraya Road",
      areaName: "T. Nagar",
      costForTwo: "₹500 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "Biryani",
        "Chaat",
        "Desserts",
        "Sweets",
        "South Indian",
        "Tandoor",
      ],
      avgRating: 4.7,
      veg: true,
      parentId: "3006",
      avgRatingString: "4.7",
      totalRatingsString: "86K+",
      sla: {
        deliveryTime: 14,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-17 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20RX%20listing%2018px.pngImage preview",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.pngImage preview",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20RX%20listing%2018px.pngImage preview",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.pngImage preview",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8d074791-05cb-44e3-b0eb-25db45e923d8",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/shri-balaajee-bhavan-sir-thyagaraya-road-t-nagar-rest23202",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "976500",
      name: "Sashwatha Cafe",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/21/f84b1914-69da-4c83-b9f3-147f60a7c864_976500.jpg",
      locality: "T Nagar",
      areaName: "T Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["South Indian"],
      avgRating: 4.6,
      veg: true,
      parentId: "574722",
      avgRatingString: "4.6",
      totalRatingsString: "838",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-17 07:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8d074791-05cb-44e3-b0eb-25db45e923d8",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/sashwatha-cafe-t-nagar-rest976500",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  const {cloudinaryImageId, name, cuisines, avgRating} = resData?.info;
  const {deliveryTime} = resData.info.sla;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};


// not sending keys is not acceptable <<< using index <<<< using unique ids as keys
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
            resCardData.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
        }
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
