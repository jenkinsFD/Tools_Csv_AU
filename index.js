"use strict"


const faker = require('faker');
const fs = require('fs');
const Papa = require('papaparse');
var usaCities = require('./USCities3.js');


/*
Referencia de los metodos dispobibles
https://marak.github.io/faker.js/#toc7__anchor 
*/

/* fehca de hoy personalizada dd_mm_yyyy  */
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //Enero es 0!
    let yyyy = today.getFullYear();
     today = dd + '_' + mm + '_' +  yyyy;
     dateS = yyyy + '-' + mm + '-' + dd;
    let uui = faker.random.number();

    let ArrayAirlines = ["VW","AA","AF","IJ","WS","AE","SS","AS","GH","LB","EW","AJ"];
    let ArrayTicketClass = ["IN","FK","KL","UV","OP","UI","FT","MU"];
    let ArrayAirport = ["ORD", "MX", "TJ", "KK", "UK", "JU", "FD", "KL", "TR", "TY"];
    let ArrayMonth = ["01","02","03","04","05","06","07","08","09","10","11","12"];
    let ArrayYear = [1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027];
    let ArrayLevel = ["GOLD", "PLATINUM", "ZAFIR", "VIP", "BASIC", "JR", "Non Elite or Non Member (PPR)"];
    let nameFile = "./"+dateS+"_"+uui+"_UA_"+numberTest+".csv";  // construlle nombre del archivo
    let testerName =  "Lba3_"+dd+"_"+mm+"_"; 
    
    
    let arrayData = [];
    for (var i = 0; i < numberTest; i++) {
        let randomNumber1 =  Math.floor(1000 + Math.random() * 9000);
        let randomNumber2 =  Math.floor(2000 + Math.random() * 8000);
        let randomNumber3 =  Math.floor(3000 + Math.random() * 7000);
        let randomNumber4 =  Math.floor(4000 + Math.random() * 6000);
        let randomMonth = ArrayMonth[faker.random.number({'min': 1,'max': 11})];
        let randomYear  = ArrayYear[faker.random.number({'min': 1,'max': 28})];
        let dateExp = randomMonth+"/"+randomYear;
        let numberR = Math.floor(1000 + Math.random() * 900);
        var jsonCity = usaCities.RandomCity(numberR);
        var jsonCity2 = usaCities.RandomCity(numberR+1);
        let randomAirport= ArrayAirport[faker.random.number({'min': 1,'max': 9})];
        let randomAirport2= ArrayAirport[faker.random.number({'min': 1,'max': 9})];
        let randomTicketClass = ArrayTicketClass[faker.random.number({'min': 1,'max': 7})];
        let randomLevel  = ArrayLevel[faker.random.number({'min': 1,'max': 5})];

        let transactionId = testerName+faker.random.number();
        let transactionDateTime = "";
        let userToken = "7fef8055-9b26-48ed-a3ef-ad41cd8582b9";
        let salesChannel = "WEB";
        let salesType = "TICKET";
        let posStationID = "WEB SU CO";
        let pointOfSale = "USA";
        let totalOrderAmountUSD = faker.commerce.price();
        let totalOrderAmountLocalCurrency = faker.commerce.price();
        let totalExtraFeesUSD = faker.random.number();
        let localCurrencyCode = faker.finance.currencyCode();
        let customerFirstName = faker.name.firstName();
        let customerLastName = faker.name.lastName();
        let memberEmail = faker.internet.email();
        let cardType = "AX";
        let cardNumber = randomNumber1+"-"+randomNumber2+"-"+randomNumber3+"-"+randomNumber4;
        let cardExpireDate = dateExp;
        let cardholderName = faker.name.findName();
        let billingAddressLine1 = faker.address.streetAddress();
        let billingCity = jsonCity.city;
        let billingRegion = jsonCity.state;
        let billingPostalCode = jsonCity.zip_code;
        let billingCountryCode = "USA";
        let billingPhone = faker.phone.phoneNumberFormat();
        let cardAuthorizedAmountUSD = faker.random.number();
        let cardAuthorizedAmountLocalCurrency = faker.random.number();
        let authorizationCode = faker.random.number();
        let pnr = faker.random.alphaNumeric()+"-"+faker.random.number();
        let pnrAAA = "WEB SU CO";
        let roundTripOneWay = "RT";
        let tripSummary = "UA-SDFORD UA-ORDMKE UA-MKEORD UA-ORDSDF";
        let highestCabinOfService = "Y";
        let departureCity = jsonCity.city;
        let departureAirportCode =randomAirport;
        let departureDateTime = faker.date.past();
        let arrivalCity = jsonCity2.city;
        let arrivalAirportCode = randomAirport2;
        let arrivalDateTime = "";
        let segmentFareClass = randomTicketClass;
        let segmentAirlineCode = "UA";
        let segmentAirlineName = "UA";
        let segmentFlightNumber = faker.random.number();
        let ticketNumber = faker.random.alphaNumeric()+"-"+faker.random.number();
        let ticketDescription = "TICKET";
        let ticketProductCode = "RES";
        let ticketAmountUSD = faker.commerce.price();
        let passengerFirstName = faker.name.firstName();
        let passengerLastName = faker.name.lastName();
        let passengerEmail = faker.internet.email();
        let passengerPhone1 = faker.phone.phoneNumberFormat();
        let memberID = faker.company.catchPhrase()+"-"+faker.random.number();
        let membershipDate = dateExp;
        let membershipStatus = "Open";
        let membershipLevel = randomLevel;
        let ipAddress = faker.internet.ip();
        let iovationBlackBox = "";
        let browserSessionID = "0281535ABC974CB39E99CA52DE719200";
        let browserHostName = "www.united.com";
        let browserAccept = "text/html, application/xhtml+xml, */*";
        let browserAcceptEncoding = "gzip";
        let browserAcceptCharset = "utf-8";
        let browserAcceptLanguage = "en-US";
        let browserConnection = "TE, keep-alive";
        let browserID = "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko";
        let browserCookie = "si=False";
        let browserReferer = "https://www.united.com/web/en-US/apps/booking/flight/billingRevenue.aspx";
        let numberOfFailedAttempts = "0";
        let statusCode = "200";
        let testResult = "-";

        let stringjson =  {
            "transactionId":transactionId,
            "transactionDateTime":transactionDateTime,
            "userToken":userToken,
            "salesChannel":salesChannel,
            "salesType":salesType,
            "posStationID":posStationID,
            "pointOfSale":pointOfSale,
            "totalOrderAmountUSD":totalOrderAmountUSD,
            "totalOrderAmountLocalCurrency":totalOrderAmountLocalCurrency,
            "totalExtraFeesUSD":totalExtraFeesUSD,
            "localCurrencyCode":localCurrencyCode,
            "customerFirstName":customerFirstName,
            "customerLastName":customerLastName,
            "memberEmail":memberEmail,
            "cardType":cardType,
            "cardNumber":cardNumber,
            "cardExpireDate":cardExpireDate,
            "cardholderName":cardholderName,
            "billingAddressLine1":billingAddressLine1,
            "billingCity":billingCity,
            "billingRegion":billingRegion,
            "billingPostalCode":billingPostalCode,
            "billingCountryCode":billingCountryCode,
            "billingPhone":billingPhone,
            "cardAuthorizedAmountUSD":cardAuthorizedAmountUSD,
            "cardAuthorizedAmountLocalCurrency":cardAuthorizedAmountLocalCurrency,
            "authorizationCode":authorizationCode,
            "pnr":pnr,
            "pnrAAA":pnrAAA,
            "roundTripOneWay":roundTripOneWay,
            "tripSummary":tripSummary,
            "highestCabinOfService":highestCabinOfService,
            "departureCity":departureCity,
            "departureAirportCode":departureAirportCode,
            "departureDateTime":departureDateTime,
            "arrivalCity":arrivalCity,
            "arrivalAirportCode":arrivalAirportCode,
            "arrivalDateTime":arrivalDateTime,
            "segmentFareClass":segmentFareClass,
            "segmentAirlineCode":segmentAirlineCode,
            "segmentAirlineName":segmentAirlineName,
            "segmentFlightNumber":segmentFlightNumber,
            "ticketNumber":ticketNumber,
            "ticketDescription":ticketDescription,
            "ticketProductCode":ticketProductCode,
            "ticketAmountUSD":ticketAmountUSD,
            "passengerFirstName":passengerFirstName,
            "passengerLastName":passengerLastName,
            "passengerEmail":passengerEmail,
            "passengerPhone1":passengerPhone1,
            "memberID":memberID,
            "membershipDate":membershipDate,
            "membershipStatus":membershipStatus,
            "membershipLevel":membershipLevel,
            "ipAddress":ipAddress,
            "iovationBlackBox":iovationBlackBox,
            "browserSessionID":browserSessionID,
            "browserHostName":browserHostName,
            "browserAccept":browserAccept,
            "browserAcceptEncoding":browserAcceptEncoding,
            "browserAcceptCharset":browserAcceptCharset,
            "browserAcceptLanguage":browserAcceptLanguage,
            "browserConnection":browserConnection,
            "browserID":browserID,
            "browserCookie":browserCookie,
            "browserReferer":browserReferer,
            "numberOfFailedAttempts":numberOfFailedAttempts,
            "statusCode":statusCode,
            "testResult":testResult
         };
         arrayData.push(stringjson);
    }

    
    var textCsv = Papa.unparse(arrayData);

    fs.writeFile(nameFile, textCsv, (error) => {
        if (error) {
            throw error;
        }
        console.log('Created CSV file DONE!!');
    });


   
