const NewYork = [
    " Flight Miami - New York (MIA - LGA) ",
    "Flight Fort Lauderdale - New York (FLL - LGA)",
    " Flight Fort Lauderdale - Newark (FLL - EWR)",
    "Flight Miami - Newark (MIA - EWR)",
    "Flight Atlanta - Newark (ATL - EWR)",
    "Flight Atlanta - New York (ATL - LGA)",
    " Flight Dallas - New York (DFW - LGA)",
    "Flight Dallas - New York (DFW - LGA)",
    "Flight Houston - Newark (HOU - EWR)",
    "Flight Chicago - New York (ORD - LGA)",
    "Flight Dallas - New York (DFW - JFK)",
    "Flight Dallas - Newark (DFW - EWR)",
    "Flight Chicago - Newark (ORD - EWR)",
    "Flight Chicago - New York (ORD - JFK)",
    "Flight Houston - New York (HOU - LGA)",
    "Flight Los Angeles - New York (LAX - JFK)",
    "Flight San Francisco - New York(SFO - JFK)",
    "Flight San Francisco - Newark(SFO - EWR)",
    "Flight Los Angeles - Newark(LAX - EWR)",
    "Flight San Francisco - New York(SFO - LGA)",
    "Flight Denver - New York(DEN - LGA)",
    "Flight Los Angeles - New York(LAX - LGA)",
    "Flight Seattle - Newark(SEA - EWR)",
    "Flight Seattle - New York(SEA - JFK)"
];
const chicago = [
    "Flight Atlanta - Chicago (ATL - ORD)",
    "Flight Fort Lauderdale - Chicago (FLL - ORD)",
    "Flight Baltimore - Chicago (BWI - ORD)",
    "Flight Boston - Chicago (BOS - ORD)",
    "Flight Orlando - Chicago (MCO - ORD)",
    "Flight Dallas - Chicago (DFW - ORD)",
    "Flight Philadelphia - Chicago (PHL - ORD)"

];
const lasvegas = [
    "Flight San Francisco - Las Vegas (SFO - LAS)",
    "Flight Minneapolis - Las Vegas (MSP - LAS)",
    "Flight Los Angeles - Las Vegas (LAX - LAS)",
    "Flight Dallas - Las Vegas (DFW - LAS)",
    "Flight Seattle - Las Vegas (SEA - LAS)",
    "Flight Houston - Las Vegas (HOU - LAS)",
    "Flight Houston - Las Vegas (HOU - LAS)",
    "Flight Houston - Las Vegas (IAH - LAS)",
    "Flight Chicago - Las Vegas (ORD - LAS)",
    "Flight Fort Lauderdale - Las Vegas (FLL - LAS)",
    "Flight Newark - Las Vegas (EWR - LAS)",
    "Flight Atlanta - Las Vegas (ATL - LAS)",
    "Flight Baltimore - Las Vegas (BWI - LAS)",
    "Flight Miami - Las Vegas (MIA - LAS)"
]

const orlando = [
    " Flight Baltimore - Orlando (BWI - MCO)",
    "Flight New York - Orlando (LGA - MCO)",
    "Flight Atlanta - Orlando (ATL - MCO)",
    "Flight Philadelphia - Orlando (PHL - MCO)",
    "Flight Minneapolis - Orlando (MSP - MCO)",
    "Flight Houston - Las Vegas (HOU - LAS)",
    "Flight Houston - Las Vegas (IAH - LAS)",
    "Flight Newark - Orlando (EWR - MCO)",
    "Flight Cleveland - Orlando (CLE - MCO)",
]
const denver = [
    "Flight Houston - Denver (HOU - DEN)",
    "Flight Minneapolis - Denver (MSP - DEN)",
    "Flight Fort Lauderdale - Denver (FLL - DEN)",
    "Flight Ontario - Denver (ONT - DEN)",
    "Flight Seattle - Denver (SEA - DEN)",
    "Flight Los Angeles - Denver (LAX - DEN)",
    "Flight Phoenix - Denver (PHX - DEN)",
]
const miami = [
    "Flight Atlanta - Miami(ATL - MIA)",
    "Flight Philadelphia - Miami(PHL - MIA)",
    "Flight Boston - Miami(BOS - MIA)",
    "Flight New York - Miami(LGA - MIA)",
    "Flight Newark - Miami(EWR - MIA)",
    "Flight Baltimore - Miami(BWI - MIA)",
    "Flight Detroit - Miami(DTW - MIA)",
    "Flight Hartford - Miami(BDL - MIA)",
    "Flight Raleigh - Miami(RDU - MIA)",
    "Flight Cleveland - Miami(CLE - MIA)",
    "Flight Chicago - Miami(ORD - MIA)",
    "Flight Denver - Miami(DEN - MIA)",
    "Flight Dallas - Miami(DFW - MIA)",
    "Flight Houston - Miami(HOU - MIA)",
    "Flight Houston - Miami(IAH - MIA)",
    "Flight Los Angeles - Miami(LAX - MIA)",
    "Flight New York - Miami(JFK - MIA)",
    "Flight Charlotte - Miami(CLT - MIA)",
    "Flight Washington, D.C. - Miami(DCA - MIA)",
    "Flight Minneapolis - Miami(MSP - MIA)",
    "Flight Washington, D.C. - Miami(IAD - MIA)",
    "Flight Chicago - Miami(MDW - MIA)"
]
const fortlauderdale = [
    "Flight Philadelphia - Fort Lauderdale (PHL - FLL)",
    "Flight Atlanta - Fort Lauderdale (ATL - FLL)",
    "Flight New York - Fort Lauderdale (LGA - FLL)",
    "Flight Newark - Fort Lauderdale (EWR - FLL)",
    "Flight Baltimore - Fort Lauderdale (BWI - FLL)",
    "Flight Detroit - Fort Lauderdale (DTW - FLL)",
    "Flight Cleveland - Fort Lauderdale (CLE - FLL)"
]
const washington = [
    " Flight Atlanta - Baltimore (ATL - BWI)",
    "Flight Boston - Washington, D.C. (BOS - DCA)",
    "Flight Boston - Washington, D.C. (BOS - IAD)",
    "Flight Chicago - Baltimore (ORD - BWI)",
    "Flight Houston - Baltimore (IAH - BWI)",
    "Flight Houston - Baltimore (HOU - BWI)",
    "Flight Miami - Washington, D.C. (MIA - IAD)",
    "Flight Minneapolis - Washington, D.C. (MSP - IAD)",
    "Flight Dallas - Baltimore (DFW - BWI)",
    "Flight Los Angeles - Washington, D.C. (LAX - IAD)",
    "Flight Los Angeles - Baltimore (LAX - BWI)"
]
const sanfrancisco = [
    "Flight Ontario - San Francisco (ONT - SFO) ",
    "Flight Los Angeles - San Francisco (LAX - SFO)",
    "Flight Phoenix - San Francisco (PHX - SFO)",
    "Flight Fort Lauderdale - San Francisco (FLL - SFO) ",
    "Flight Seattle - San Francisco (SEA - SFO)",
    "Flight Santa Ana - San Francisco (SNA - SFO)",
    "Flight Minneapolis - San Francisco (MSP - SFO)",
    "Flight Denver - San Francisco (DEN - SFO)",
    "Flight Austin - San Francisco (AUS - SFO)",
    "Flight Dallas - San Francisco (DFW - SFO)",
    "Flight Newark - San Francisco (EWR - SFO) ",
    "Flight New York - San Francisco (JFK - SFO) ",
    "Flight New York - San Francisco (LGA - SFO)",
    "Flight Baltimore - San Francisco (BWI - SFO)"
]
const boston = [
    "Flight Miami - Boston (MIA - BOS) ",
    "Flight Fort Lauderdale - Boston (FLL - BOS) ",
    "Flight Baltimore - Boston (BWI - BOS) ",
    "Flight New York - Boston (JFK - BOS) ",
    "Flight Newark - Boston (EWR - BOS) ",
    "Flight Washington, D.C. - Boston (DCA - BOS)",
    "Flight Washington, D.C. - Boston (IAD - BOS) "
]
const atlanta = [
    "Flight Miami - Atlanta (MIA - ATL)",
    "Flight Fort Lauderdale - Atlanta (FLL - ATL)",
    "Flight Baltimore - Atlanta (BWI - ATL)",
    "Flight Philadelphia - Atlanta (PHL - ATL)",
    "Flight Newark - Atlanta (EWR - ATL) ",
    "Flight Hartford - Atlanta (BDL - ATL) ",
    "Flight Houston - Atlanta (HOU - ATL) "
]
const seattle = [
    "  Flight Denver - Seattle (DEN - SEA) ",
    "Flight San Francisco - Seattle (SFO - SEA)",
    "Flight Phoenix - Seattle (PHX - SEA)",
    "Flight Los Angeles - Seattle (LAX - SEA) ",
    "Flight Minneapolis - Seattle (MSP - SEA) ",
    "Flight Ontario - Seattle (ONT - SEA) ",
    "Flight Burbank - Seattle (BUR - SEA)"
]
const pheonix = [
    "Flight San Francisco - Phoenix (SFO - PHX) ",
    "Flight Salt Lake City - Phoenix (SLC - PHX)",
    "Flight Los Angeles - Phoenix (LAX - PHX)",
    "Flight Denver - Phoenix (DEN - PHX) ",
    "Flight Minneapolis - Phoenix (MSP - PHX) ",
    "Flight Seattle - Phoenix (SEA - PHX)",
    "Flight Dallas - Phoenix (DFW - PHX) "
]

const hawaii = [
    "Flight Los Angeles - Hawaii (LAX - USHI)",
    "Flight San Francisco - Hawaii (SFO - USHI)",
    "Flight San Jose - Hawaii (SJC - USHI)",
    "Flight Portland - Hawaii (PDX - USHI)",
    "Flight San Diego - Hawaii (SAN - USHI)",
    "Flight Seattle - Hawaii (SEA - USHI)",
    "Flight Oakland - Hawaii (OAK - USHI)"
]
const dallas = [
    "Flight Miami - Dallas (MIA - DFW) ",
    "Flight New York - Dallas (LGA - DFW) ",
    "Flight Atlanta - Dallas (ATL - DFW)",
    "Flight Fort Lauderdale - Dallas (FLL - DFW)",
    "Flight Chicago - Dallas (ORD - DFW) ",
    "Flight Los Angeles - Dallas (LAX - DFW) ",
    "Flight New York - Dallas (JFK - DFW)"
]
const honolulu = [
    "  Flight San Francisco - Honolulu (SFO - HNL)",
    "Flight San Jose - Honolulu (SJC - HNL)",
    "Flight Portland - Honolulu (PDX - HNL) ",
    "Flight San Diego - Honolulu (SAN - HNL) ",
    "Flight Los Angeles - Honolulu (LAX - HNL)",
    "Flight Seattle - Honolulu (SEA - HNL) ",
    "Flight Oakland - Honolulu (OAK - HNL) "
]

const tampa = [
    "Flight Atlanta - Tampa (ATL - TPA) ",
    "Flight Cleveland - Tampa (CLE - TPA)",
    "Flight Norfolk - Tampa (ORF - TPA)",
    "Flight Richmond - Tampa (RIC - TPA)",
    "Flight New York - Tampa (LGA - TPA)",
    "Flight New York - Tampa (JFK - TPA)",
    "Flight Dallas - Tampa (DFW - TPA)"
]
const sandiego = [
    " Flight Oakland - San Diego (OAK - SAN) ",

    "Flight Phoenix - San Diego (PHX - SAN)",

    "Flight San Francisco - San Diego (SFO - SAN)",

    "Flight San Jose - San Diego (SJC - SAN) ",

    "Flight Denver - San Diego (DEN - SAN)",

    "Flight Dallas - San Diego (DFW - SAN)",

    "Flight Minneapolis - San Diego (MSP - SAN)"
]
const losangeles = [
    "Flight Oakland - Los Angeles (OAK - LAX)",

    "Flight San Francisco - Los Angeles (SFO - LAX) ",

    "Flight Austin - Los Angeles (AUS - LAX) ",

    "Flight Denver - Los Angeles (DEN - LAX) ",

    "Flight Miami - Los Angeles (MIA - LAX)",

    "Flight Dallas - Los Angeles (DFW - LAX) ",

    "Flight Portland - Los Angeles (PDX - LAX) ",

    "Flight Seattle - Los Angeles (SEA - LAX)",

    "Flight Detroit - Los Angeles (DTW - LAX)"
]

const huston = [
    "Flight Denver - Houston (DEN - IAH)",
    " Flight Orlando - Houston (MCO - IAH) ",
    "Flight Miami - Houston (MIA - IAH) ",
    " Flight Atlanta - Houston (ATL - IAH)",
    "Flight Detroit - Houston (DTW - IAH)",
    " Flight Minneapolis - Houston (MSP - IAH)",
    "Flight Newark - Houston (EWR - IAH)"

]
const unitedstates = [
    "Flight New York - Fort Lauderdale (LGA - FLL)",
    "Flight New York - Miami (LGA - MIA)",
   " Flight Newark - Miami(EWR - MIA) ",

"Flight Newark - Fort Lauderdale(EWR - FLL) ",

"Flight Newark - Orlando(EWR - MCO)",

"Flight Dallas - Las Vegas(DFW - LAS) ",

"Flight New York - Miami(JFK - MIA)"
]

export {
    NewYork, chicago, lasvegas, orlando, denver, miami, fortlauderdale, washington, sanfrancisco, boston,
    atlanta, seattle, pheonix, hawaii, dallas, honolulu, tampa, sandiego, losangeles, huston, unitedstates
};