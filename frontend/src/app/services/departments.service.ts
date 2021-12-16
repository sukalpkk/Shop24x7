import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductResponse, ProductDetails } from '../models/productdetails.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http: HttpClient) { }

  public getProductById(id: number): ProductDetails {
    return this.getProductRecords().find(ProductDetails => ProductDetails.id == id)!;
  }


  public getProductRecords(): ProductDetails[] {
    return [{
      "id": 1,
      "name": "Nokia 105",
      "category": "smartphone",
      "price": 300,
      "discountPrice": 50,
      "description": "compact mobile for travel purposes",
      "image": "https://images-na.ssl-images-amazon.com/images/I/31Z2ee9oYQL.jpg",
      "created_on": "15 AUG, 2021",
      "isTopProduct": "true"
    },


    {
      "id": 2,
      "name": "Samsung galaxy m51",
      "category": "smartphone",
      "price": 400,
      "discountPrice": 20,
      "description": "M51 is ready for any task at hand with an octa-core processor",
      "image": "https://images.samsung.com/is/image/samsung/in-galaxy-m51-m515fz-8gb-sm-m515fzbeins-sm-m---fzbdins-301211753?scl=1&fmt=png-alpha",
      "created_on": "16 AUG, 2021",
      "isTopProduct": "true"
    },

    {
      "id": 3,
      "name": "Oppo f19",
      "category": "smartphone",
      "price": 500,
      "discountPrice": 10,
      "description": "6.43 Inch (16.3cm) FHD+ Super AMOLED Punch-hole Display with 2400x1080 pixels",
      "image": "https://images-na.ssl-images-amazon.com/images/I/712PBW8cGBL._SX679_.jpg",
      "created_on": "14 AUG, 2021",
      "isTopProduct": "false"
    },

    {
      "id": 4,
      "name": "One plus nord",
      "category": "smartphone",
      "price": 350,
      "discountPrice": 80,
      "description": "64MP+8MP+2MP triple rear camera with 1080p video at 30/60 fps, 4k 30 fps",
      "image": "https://images-na.ssl-images-amazon.com/images/I/61HjItaMQdS._SL1500_.jpg",
      "created_on": "19 AUG, 2021",
      "isTopProduct": "false"
    },

    {
      "id": 5,
      "name": "Huawei p40 pro",
      "category": "smartphone",
      "price": 460,
      "discountPrice": 50,
      "description": "Ultra Vision Leica Quad Camera: 50 MP Ultra Vision Sensor, 40 MP Ultra Wide Cine Camera",
      "image": "https://images-eu.ssl-images-amazon.com/images/I/41wcndTcMKL._SX300_SY300_QL70_FMwebp_.jpg",
      "created_on": "17 AUG, 2021",
      "isTopProduct": "true"
    },

    {
      "id": 6,
      "name": "Mi 10i 5G",
      "category": "smartphone",
      "price": 3000,
      "discountPrice": 50,
      "description": "Midnight Black, 8GB RAM, 128GB Storage",
      "image": "https://images-na.ssl-images-amazon.com/images/I/71%2BKJpeI2rL._SL1500_.jpg",
      "created_on": "10 AUG, 2021",
      "isTopProduct": "true"
    },

    {
      "id": 7,
      "name": "Nokia 105",
      "category": "smartphone",
      "price": 700,
      "discountPrice": 60,
      "description": "compact mobile for travel purposes",
      "image": "https://images-na.ssl-images-amazon.com/images/I/31Z2ee9oYQL.jpg",
      "created_on": "11 AUG, 2021",
      "isTopProduct": "true"
    },

    {
      "id": 8,
      "name": "Nokia 135",
      "category": "smartphone",
      "price": 1000,
      "discountPrice": 50,
      "description": "compact mobile for travel purposes",
      "image": "https://images-na.ssl-images-amazon.com/images/I/31Z2ee9oYQL.jpg",
      "created_on": "12 AUG, 2021",
      "isTopProduct": "true"
    },

    {
      "id": 9,
      "name": "Nokia 95",
      "category": "smartphone",
      "price": 2200,
      "discountPrice": 20,
      "description": "compact mobile for travel purposes",
      "image": "https://images-na.ssl-images-amazon.com/images/I/31Z2ee9oYQL.jpg",
      "created_on": "13 AUG, 2021",
      "isTopProduct": "true"
    },
    {
      "id": 10,
      "name": "LG Tv",
      "category": "tv",
      "price": 23400,
      "discountPrice": 200,
      "description": "compact TV",
      "image": "https://5.imimg.com/data5/DI/ZS/CP/SELLER-50489472/fortex-hd-ready-ips-led-tv-500x500.jpg",
      "created_on": "23 AUG, 2021",
      "isTopProduct": "true"
    },

    {
      "id": 11,
      "name": "Samsung Tv",
      "category": "tv",
      "price": 12400,
      "discountPrice": 100,
      "description": "compact TV",
      "image": "data:image/jpeg;base64,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",
      "created_on": "24 AUG, 2021",
      "isTopProduct": "false"
    },

    {
      "id": 12,
      "name": "Oppo Tv",
      "category": "tv",
      "price": 3400,
      "discountPrice": 100,
      "description": "compact TV",
      "image": "https://5.imimg.com/data5/DI/ZS/CP/SELLER-50489472/fortex-hd-ready-ips-led-tv-500x500.jpg",
      "created_on": "29 AUG, 2021",
      "isTopProduct": "false"
    },

    {
      "id": 13,
      "name": "Vivo Tv",
      "category": "tv",
      "price": 5400,
      "discountPrice": 120,
      "description": "compact TV",
      "image": "https://m.media-amazon.com/images/I/71vZLIfj5yS._SL1500_.jpg",
      "created_on": "19 AUG, 2021",
      "isTopProduct": "true"
    },



    {
      "id": 14,
      "name": "Lenovo laptop",
      "category": "laptops",
      "price": 12400,
      "discountPrice": 180,
      "description": "compact laptop",
      "image": "https://www.reliancedigital.in/medias/Lenovo-82FG00BQIN-Laptops-491946562-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNTk3NTl8aW1hZ2UvanBlZ3xpbWFnZXMvaGMyL2hiZS85NDUzODkyODk0NzUwLmpwZ3w2YzE0ODcxZDVlZjQ0MTNiNmUyNTg3NzA5MTQzOTE0NWZmM2YyZDE2MWE1MWY2NWJiZGY3ODVlYTY3YTFhNGYy",
      "created_on": "09 AUG, 2021",
      "isTopProduct": "true"
    },

    {
      "id": 15,
      "name": "Hp laptop",
      "category": "laptops",
      "price": 13400,
      "discountPrice": 180,
      "description": "compact laptop",
      "image": "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06586290_7.png",
      "created_on": "09 AUG, 2021",
      "isTopProduct": "true"
    },

    {
      "id": 16,
      "name": "Hp laptop",
      "category": "laptops",
      "price": 14400,
      "discountPrice": 230,
      "description": "compact laptop",
      "image": "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg",
      "created_on": "01 AUG, 2021",
      "isTopProduct": "true"
    },
    {
      "id": 17,
      "name": "Hp laptop",
      "category": "laptops",
      "price": 13400,
      "discountPrice": 180,
      "description": "compact laptop",
      "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhAPExAQEhMWEBIQEBYYDxAVEhcQFRUWGBgSFxcYHSggGhonGxUVITEhJSkrLi4uGB8zODMtNygtLysBCgoKDg0OGBAQGi0ZHSUwKzgrKy0tLS0rLS0rKysrLS0tLSstKy0tLTcrLSsrNzcuLSsrNy0rKysrLSstLS0rK//AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAgMAAwAAAAAAAAAAAAAAAwcEBQYBAgj/xABJEAACAQMABgQKBQgIBwAAAAAAAQIDBBEFBxIhMXEGQWGhEyIyUXKBkbGywRRCU2KCCCMzQ1KDksIkRGOio9HS8DRFVHOTs+H/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIEA//EAB0RAQEBAQADAQEBAAAAAAAAAAABERICMVFBIRP/2gAMAwEAAhEDEQA/ALqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAMe5vqVPfUrUqa+9UhH3swbLpNY1qio0r20q1HnEIXFKcnjjhJ7wNsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHicklltJedvCOc1jaXla6NvbmEnCcaWxTkuKqVJRpxku1OefUVVa6q1VjCrc31epOUIyktlZTkk3HanKTfMsmpbIuS86S2NL9LfWlN+aVzRT9m1k0t5rO0RT439OXoQrVPgi0cNbaqLCO+Urmpzqwiv7kF7zZUNXmjY7/oqk/vVa0u5yx3GuKz3Gdea6tFw8n6VV9Ggor/ElE015r6oL9FYVpvq269OHwqRvaHReyhhxsrVNcH9Hpt+1rJsqNvGPkxjHlFL3F4TtwtXW/pOov6Pojk3TuqvwqJBPpf0nrLxLWFHPmtqcGv/ADyfeWNgbI4h3VZSodJ6y8e8lSz/AG9Gm/8AAiQPV/pWruuNKNrzO4uqvt2sFqqJ5US8xOqqu21OQ/WXsn2Rt1HvlN+41XR/QELfpDa2dKc5KlWpTcpbOW1CNSS3LGMPBdagVjq9j4fpJd1vspXLXKOaK96M+Un414232vcAGGwAAAAAAAAAAAAAAAAAAAAAAAAAAV9rpntWlpZ/9VpG2oS3/Uy2+9QN04Gh6et1dL6EtuKpq5u5rzYjiEn+KDXrOl2DXjWfKINg8bBkbA2DWs4x9g87BPsDYHRiHYCgT7B52BpiDZPZRJdg87JNXEMmknJ8Em3yW8rL8nuk6lxpC7kvG2FFv/uz233wO96X13Ssb2qtzja1tl/ecGo97Rzv5PNps2VxVxvncKHqpxyv/YZtakWqACKAAAAAAAAAAAAAAAAAAAAAAAAAACtofnukN5PqtdHUbb8dWSq+6UjsNgp7R+sClaX+l61ShVquteuKlCcN1Kg5wgsS68PJYmjenGj61H6QrqlTisKcakowqwk+EXDOW9zxjKeNzY0b3YGwc5a6w9FzlsK8hF+edOtSh/HUio9509OSklKLUovemmnFrzpriNMR7A2SbZI7irCEXOc4wglmUpSUYpedt7kTTHjZGyctfayNG05OPh5VGuLhRqSj/FhJ+ps0GnNbVJJxs6bnLH6SqnGCfZDypetr1l/osO8uadKEqtWpCnBeVKUlGK9bK26R60lvp2UM9XhqkXjnCnx9cseiyv8ASumbi6n4SvWnUe/ZzhQj2Rit0fUjWogk6QaXr11KVevUqvKxtTbinnjGPkx9SRfupq08Hoq23Yc3UqPntbH8h8538cpRXFySXu+Z9VdDLfwdhZQxj+j05eua2n3yKNyAAAAAAAAAAAAAAAAAAAAAAAAAABBf3SpUqtZ8KdOdV8oRcn7ic5TWnfKjonSE/wBqg6K51pRp/wA4Hzxo3o1fV4KtC2qTjPM9tunBSb3tpzazlkd30fu6W+pa1o44tQ20ucoZSLR0FeKnQoUVnxKFOD6t6issy56VW7d2LmQUm572nuecb+OfMzO0Vpi4t3mhXrUXnOIVJRi32xW6XrTLUv1RqrFS2pTWMZlCLkl2Pj19TMClo+1i/wA3RjB8PFS9+MsqMHQ/T7S+EnKFb07aLl63T2UubNd0iuL25lt3E3LrjBTgoQ7IwTwn27352dT4OC3bVRL8C3c8ZPEbWiuEMc05PvyRVdS0fUluVKo3w3Qk33IzbXohdza/NKHbOpGPtjly7jvoxjwzLlkyaFeMN6iube7JdRwVfoHex+weVlbNaSz/ABRRq7no7ewTzb1Gvu7E+6DZbX0raeZS3iap8dtIaKQpUJutRpuMlLbi8OLT454PkfXtvSUIQguEYxguUUl8j56q0VX09aU1LbUHbxfJy2mvZUyfRIUAAAAAAAAAAAAAAAAAAAAAAAAAAArnXjWzZ2tqv6xf0KUl9xbUn37BYxVGtuvt6R0Tbp/o4XFzNZ/axGMvbTftZLciz2nspbOMrd17uoz4yp8fBw7PEhxfbg5tXTXX38ur1ntC9lvTb4nFldGx0dapSW/wVLOM+SjDr6U2ViMYp8W9ldyNPO5k85fX2GHUrN5SmoZ357Rl/V2M2vpWTzJuPrUcESv5tOXi4xueEt2SGFvFPgnjfl4fP3d5PKOccN3Hhw/2i6mI5Nve3hb+7sPTOeufU+z2E+xh59nBf/epE/goY6urs3/7+Rejlj03LiqjfZ2+09o08+VvxxyZFO3SxiLy/FWOxLeZlvaZxLfjjvayNZxyOrih4XT9SouFOdVPlCEo/FTifQBRuoOl4S8vbrzwnnnOpCS7nMvI656eAACgAAAAAAAAAAAAAA0PS3S9zbU1Ut7X6S8vwiTltRW7DUUvG6+Dzu6yuL3WfpJP/hY0V97R95n2yljuAuUFBXOs+/lu+nUaXYqFKL/vwbMSfTO9qf8AMqj9CsqfwbIH0Rg9KtaMfKlGPOSXvPm+tpO4n5VxXqeldyl8UjAnQbbfgYtvi8xbfrQH0bc9JbKn5d7aR7Hc0s+zOTW3OsHRkON7Tfowqz+CLKAlbS+xxyjP5M9fBv7Nr8MwLtudbWjI5xK4qY/Ztpr49kpnWZ0ihpC9+k0lONNUKdKCmtmfiuTbwm15Un1mJK2b/VT9kvmY1XRsvs5LnOP+QGrjUmuE5LlUa+Z7xu6y4Vqq5V5f6jMlo71exkTs+3uwMEf0+4+3rv8AfTfzJY6Xul+urdm+T95E7YRtcvcs9iWe4mRdZK07eL9fV7cxj84kkOlN4v6w939nR/0mNDR0/wBia5xwu8lWjp9b2V1ZqL/PI5nw2shdLLvi6sXzpU8cMdSRLT6Y3S66T699N8fUzC+iJca0e3EpS+XzPTwVJcZuX4F72ycePxer9bunrAvF9W3f7up8pk0tY104yi6dDemspVE1lYyvGfM52NKLeI0qk/VH5LJtdDdFa9xLZha1ILDzOdO42eSWN75In+fj8Oqsr8n+lGnb3VV/XnTh64eEy/Y4ewthXMfOV50G6N17O2jQ2Jzk5upOTi4raaSwk+CxFc3l9Z1tGyrdaS5yXyNstwq6857KovOYVOyn1yRkRtu0CbaR5yekaSPdRA8gAAAAAAAAAAAAIqttCXlQhLnCL95rrnozY1PLsrSXO3pP5G2AHL1tXmipcdH269GMofC0YNbVVouXCjWh6N1cL3yZ2wArurqfsvqXF9T/AH0JfFBmFV1Pr6mk7mPpUqUvdslogCoauqW8XkaSpS9K3mvdNmBX1W6UXCvZVPxVYe+D95doAoG41baXXC3t57+q6hw/EkebbVlpSWdq2tYb921cp7uSUi/QBStvqlvn5Vexp+jGpKXwxNjR1P1X+k0lu61C2+bmWyAKzo6mrb695eT5OlH+Vmwt9Umi48YV6npXE/5cHeADlrfV3ouHCxpP0nUn8TZtLbo1ZU/IsrWPKhTz7cG1AEdKhCPkwhHlFL3EgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k=",
      "created_on": "09 AUG, 2021",
      "isTopProduct": "true"
    },

    {
      "id": 18,
      "name": "LG Oven",
      "category": "ovens",
      "price": 400,
      "discountPrice": 180,
      "description": "compact ovens",
      "image": "https://www.lg.com/in/images/microwave-ovens/md06198196/gallery/MJEN326SF-Microoven-Front-View-D-01.jpg",
      "created_on": "09 AUG, 2021",
      "isTopProduct": "true"
    },
    {
      "id": 19,
      "name": "Pigeon Oven",
      "category": "ovens",
      "price": 300,
      "discountPrice": 80,
      "description": "compact ovens",
      "image": "https://m.media-amazon.com/images/I/51+b9NGXtUL._SX522_.jpg",
      "created_on": "09 AUG, 2021",
      "isTopProduct": "true"
    },
    {
      "id": 20,
      "name": "Black Decker Oven",
      "category": "ovens",
      "price": 200,
      "discountPrice": 10,
      "description": "compact ovens",
      "image": "https://daneelyunus.files.wordpress.com/2017/06/1-black-decker-20l-microwave-oven.jpg?w=640",
      "created_on": "09 AUG, 2021",
      "isTopProduct": "true"
    }

    ]
  }
}




