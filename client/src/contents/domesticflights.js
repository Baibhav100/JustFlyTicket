const NewYork = [
    " Flights from Miami - New York (MIA - LGA) ",
    "Flights from Fort Lauderdale - New York (FLL - LGA)",
    " Flights from Fort Lauderdale - Newark (FLL - EWR)",
    "Flights from Miami - Newark (MIA - EWR)",
    "Flights from Atlanta - Newark (ATL - EWR)",
    "Flights from Atlanta - New York (ATL - LGA)",
    " Flights from Dallas - New York (DFW - LGA)",
    "Flights from Dallas - New York (DFW - LGA)",
    "Flights from Houston - Newark (HOU - EWR)",
    "Flights from Chicago - New York (ORD - LGA)",
    "Flights from Dallas - New York (DFW - JFK)",
    "Flights from Dallas - Newark (DFW - EWR)",
    "Flights from Chicago - Newark (ORD - EWR)",
    "Flights from Chicago - New York (ORD - JFK)",
    "Flights from Houston - New York (HOU - LGA)",
    "Flights from Los Angeles - New York (LAX - JFK)",
    "Flights from San Francisco - New York(SFO - JFK)",
    "Flights from San Francisco - Newark(SFO - EWR)",
    "Flights from Los Angeles - Newark(LAX - EWR)",
    "Flights from San Francisco - New York(SFO - LGA)",
    "Flights from Denver - New York(DEN - LGA)",
    "Flights from Los Angeles - New York(LAX - LGA)",
    "Flights from Seattle - Newark(SEA - EWR)",
    "Flights from Seattle - New York(SEA - JFK)"
];
const chicago = [
    "Flights from Atlanta - Chicago (ATL - ORD)",
    "Flights from Fort Lauderdale - Chicago (FLL - ORD)",
    "Flights from Baltimore - Chicago (BWI - ORD)",
    "Flights from Boston - Chicago (BOS - ORD)",
    "Flights from Orlando - Chicago (MCO - ORD)",
    "Flights from Dallas - Chicago (DFW - ORD)",
    "Flights from Philadelphia - Chicago (PHL - ORD)"

];
const lasvegas = [
    "Flights from San Francisco - Las Vegas (SFO - LAS)",
    "Flights from Minneapolis - Las Vegas (MSP - LAS)",
    "Flights from Los Angeles - Las Vegas (LAX - LAS)",
    "Flights from Dallas - Las Vegas (DFW - LAS)",
    "Flights from Seattle - Las Vegas (SEA - LAS)",
    "Flights from Houston - Las Vegas (HOU - LAS)",
    "Flights from Houston - Las Vegas (HOU - LAS)",
    "Flights from Houston - Las Vegas (IAH - LAS)",
    "Flights from Chicago - Las Vegas (ORD - LAS)",
    "Flights from Fort Lauderdale - Las Vegas (FLL - LAS)",
    "Flights from Newark - Las Vegas (EWR - LAS)",
    "Flights from Atlanta - Las Vegas (ATL - LAS)",
    "Flights from Baltimore - Las Vegas (BWI - LAS)",
    "Flights from Miami - Las Vegas (MIA - LAS)"
]

const orlando = [
    " Flights from Baltimore - Orlando (BWI - MCO)",
    "Flights from New York - Orlando (LGA - MCO)",
    "Flights from Atlanta - Orlando (ATL - MCO)",
    "Flights from Philadelphia - Orlando (PHL - MCO)",
    "Flights from Minneapolis - Orlando (MSP - MCO)",
    "Flights from Houston - Las Vegas (HOU - LAS)",
    "Flights from Houston - Las Vegas (IAH - LAS)",
    "Flights from Newark - Orlando (EWR - MCO)",
    "Flights from Cleveland - Orlando (CLE - MCO)",
]
const denver = [
    "Flights from Houston - Denver (HOU - DEN)",
    "Flights from Minneapolis - Denver (MSP - DEN)",
    "Flights from Fort Lauderdale - Denver (FLL - DEN)",
    "Flights from Ontario - Denver (ONT - DEN)",
    "Flights from Seattle - Denver (SEA - DEN)",
    "Flights from Los Angeles - Denver (LAX - DEN)",
    "Flights from Phoenix - Denver (PHX - DEN)",
]
const miami = [
    "Flights from Atlanta - Miami(ATL - MIA)",
    "Flights from Philadelphia - Miami(PHL - MIA)",
    "Flights from Boston - Miami(BOS - MIA)",
    "Flights from New York - Miami(LGA - MIA)",
    "Flights from Newark - Miami(EWR - MIA)",
    "Flights from Baltimore - Miami(BWI - MIA)",
    "Flights from Detroit - Miami(DTW - MIA)",
    "Flights from Hartford - Miami(BDL - MIA)",
    "Flights from Raleigh - Miami(RDU - MIA)",
    "Flights from Cleveland - Miami(CLE - MIA)",
    "Flights from Chicago - Miami(ORD - MIA)",
    "Flights from Denver - Miami(DEN - MIA)",
    "Flights from Dallas - Miami(DFW - MIA)",
    "Flights from Houston - Miami(HOU - MIA)",
    "Flights from Houston - Miami(IAH - MIA)",
    "Flights from Los Angeles - Miami(LAX - MIA)",
    "Flights from New York - Miami(JFK - MIA)",
    "Flights from Charlotte - Miami(CLT - MIA)",
    "Flights from Washington, D.C. - Miami(DCA - MIA)",
    "Flights from Minneapolis - Miami(MSP - MIA)",
    "Flights from Washington, D.C. - Miami(IAD - MIA)",
    "Flights from Chicago - Miami(MDW - MIA)"
]
const fortlauderdale = [
    "Flights from Philadelphia - Fort Lauderdale (PHL - FLL)",
    "Flights from Atlanta - Fort Lauderdale (ATL - FLL)",
    "Flights from New York - Fort Lauderdale (LGA - FLL)",
    "Flights from Newark - Fort Lauderdale (EWR - FLL)",
    "Flights from Baltimore - Fort Lauderdale (BWI - FLL)",
    "Flights from Detroit - Fort Lauderdale (DTW - FLL)",
    "Flights from Cleveland - Fort Lauderdale (CLE - FLL)"
]
const washington = [
    " Flights from Atlanta - Baltimore (ATL - BWI)",
    "Flights from Boston - Washington, D.C. (BOS - DCA)",
    "Flights from Boston - Washington, D.C. (BOS - IAD)",
    "Flights from Chicago - Baltimore (ORD - BWI)",
    "Flights from Houston - Baltimore (IAH - BWI)",
    "Flights from Houston - Baltimore (HOU - BWI)",
    "Flights from Miami - Washington, D.C. (MIA - IAD)",
    "Flights from Minneapolis - Washington, D.C. (MSP - IAD)",
    "Flights from Dallas - Baltimore (DFW - BWI)",
    "Flights from Los Angeles - Washington, D.C. (LAX - IAD)",
    "Flights from Los Angeles - Baltimore (LAX - BWI)"
]
const sanfrancisco = [
    "Flights from Ontario - San Francisco (ONT - SFO) ",
    "Flights from Los Angeles - San Francisco (LAX - SFO)",
    "Flights from Phoenix - San Francisco (PHX - SFO)",
    "Flights from Fort Lauderdale - San Francisco (FLL - SFO) ",
    "Flights from Seattle - San Francisco (SEA - SFO)",
    "Flights from Santa Ana - San Francisco (SNA - SFO)",
    "Flights from Minneapolis - San Francisco (MSP - SFO)",
    "Flights from Denver - San Francisco (DEN - SFO)",
    "Flights from Austin - San Francisco (AUS - SFO)",
    "Flights from Dallas - San Francisco (DFW - SFO)",
    "Flights from Newark - San Francisco (EWR - SFO) ",
    "Flights from New York - San Francisco (JFK - SFO) ",
    "Flights from New York - San Francisco (LGA - SFO)",
    "Flights from Baltimore - San Francisco (BWI - SFO)"
]
const boston = [
    "Flights from Miami - Boston (MIA - BOS) ",
    "Flights from Fort Lauderdale - Boston (FLL - BOS) ",
    "Flights from Baltimore - Boston (BWI - BOS) ",
    "Flights from New York - Boston (JFK - BOS) ",
    "Flights from Newark - Boston (EWR - BOS) ",
    "Flights from Washington, D.C. - Boston (DCA - BOS)",
    "Flights from Washington, D.C. - Boston (IAD - BOS) "
]
const atlanta = [
    "Flights from Miami - Atlanta (MIA - ATL)",
    "Flights from Fort Lauderdale - Atlanta (FLL - ATL)",
    "Flights from Baltimore - Atlanta (BWI - ATL)",
    "Flights from Philadelphia - Atlanta (PHL - ATL)",
    "Flights from Newark - Atlanta (EWR - ATL) ",
    "Flights from Hartford - Atlanta (BDL - ATL) ",
    "Flights from Houston - Atlanta (HOU - ATL) "
]
const seattle = [
    "  Flights from Denver - Seattle (DEN - SEA) ",
    "Flights from San Francisco - Seattle (SFO - SEA)",
    "Flights from Phoenix - Seattle (PHX - SEA)",
    "Flights from Los Angeles - Seattle (LAX - SEA) ",
    "Flights from Minneapolis - Seattle (MSP - SEA) ",
    "Flights from Ontario - Seattle (ONT - SEA) ",
    "Flights from Burbank - Seattle (BUR - SEA)"
]
const pheonix = [
    "Flights from San Francisco - Phoenix (SFO - PHX) ",
    "Flights from Salt Lake City - Phoenix (SLC - PHX)",
    "Flights from Los Angeles - Phoenix (LAX - PHX)",
    "Flights from Denver - Phoenix (DEN - PHX) ",
    "Flights from Minneapolis - Phoenix (MSP - PHX) ",
    "Flights from Seattle - Phoenix (SEA - PHX)",
    "Flights from Dallas - Phoenix (DFW - PHX) "
]

const hawaii = [
    "Flights from Los Angeles - Hawaii (LAX - USHI)",
    "Flights from San Francisco - Hawaii (SFO - USHI)",
    "Flights from San Jose - Hawaii (SJC - USHI)",
    "Flights from Portland - Hawaii (PDX - USHI)",
    "Flights from San Diego - Hawaii (SAN - USHI)",
    "Flights from Seattle - Hawaii (SEA - USHI)",
    "Flights from Oakland - Hawaii (OAK - USHI)"
]
const dallas = [
    "Flights from Miami - Dallas (MIA - DFW) ",
    "Flights from New York - Dallas (LGA - DFW) ",
    "Flights from Atlanta - Dallas (ATL - DFW)",
    "Flights from Fort Lauderdale - Dallas (FLL - DFW)",
    "Flights from Chicago - Dallas (ORD - DFW) ",
    "Flights from Los Angeles - Dallas (LAX - DFW) ",
    "Flights from New York - Dallas (JFK - DFW)"
]
const honolulu = [
    "  Flights from San Francisco - Honolulu (SFO - HNL)",
    "Flights from San Jose - Honolulu (SJC - HNL)",
    "Flights from Portland - Honolulu (PDX - HNL) ",
    "Flights from San Diego - Honolulu (SAN - HNL) ",
    "Flights from Los Angeles - Honolulu (LAX - HNL)",
    "Flights from Seattle - Honolulu (SEA - HNL) ",
    "Flights from Oakland - Honolulu (OAK - HNL) "
]

const tampa = [
    "Flights from Atlanta - Tampa (ATL - TPA) ",
    "Flights from Cleveland - Tampa (CLE - TPA)",
    "Flights from Norfolk - Tampa (ORF - TPA)",
    "Flights from Richmond - Tampa (RIC - TPA)",
    "Flights from New York - Tampa (LGA - TPA)",
    "Flights from New York - Tampa (JFK - TPA)",
    "Flights from Dallas - Tampa (DFW - TPA)"
]
const sandiego = [
    " Flights from Oakland - San Diego (OAK - SAN) ",

    "Flights from Phoenix - San Diego (PHX - SAN)",

    "Flights from San Francisco - San Diego (SFO - SAN)",

    "Flights from San Jose - San Diego (SJC - SAN) ",

    "Flights from Denver - San Diego (DEN - SAN)",

    "Flights from Dallas - San Diego (DFW - SAN)",

    "Flights from Minneapolis - San Diego (MSP - SAN)"
]
const losangeles = [
    "Flights from Oakland - Los Angeles (OAK - LAX)",

    "Flights from San Francisco - Los Angeles (SFO - LAX) ",

    "Flights from Austin - Los Angeles (AUS - LAX) ",

    "Flights from Denver - Los Angeles (DEN - LAX) ",

    "Flights from Miami - Los Angeles (MIA - LAX)",

    "Flights from Dallas - Los Angeles (DFW - LAX) ",

    "Flights from Portland - Los Angeles (PDX - LAX) ",

    "Flights from Seattle - Los Angeles (SEA - LAX)",

    "Flights from Detroit - Los Angeles (DTW - LAX)"
]

const huston = [
    "Flights from Denver - Houston (DEN - IAH)",
    " Flights from from Orlando - Houston (MCO - IAH) ",
    "Flights from Miami - Houston (MIA - IAH) ",
    " Flights from Atlanta - Houston (ATL - IAH)",
    "Flights from Detroit - Houston (DTW - IAH)",
    " Flights from Minneapolis - Houston (MSP - IAH)",
    "Flights from Newark - Houston (EWR - IAH)"

]
const unitedstates = [
    "Flights from New York - Fort Lauderdale (LGA - FLL)",
    "Flights from New York - Miami (LGA - MIA)",
   " Flights from Newark - Miami(EWR - MIA) ",

"Flights from Newark - Fort Lauderdale(EWR - FLL) ",

"Flights from Newark - Orlando(EWR - MCO)",

"Flights from Dallas - Las Vegas(DFW - LAS) ",

"Flights from New York - Miami(JFK - MIA)"
]
const london=[
  "  Flights from New York - London (JFK - STN)",

"Flights from Newark - London (EWR - LHR)",
"Flights from New York - London (JFK - LHR)",
"Flights from Chicago - London (ORD - LHR)",

"Flights from New York - London (JFK - LGW)",

"Flights from Boston - London (BOS - LHR)",

"Flights from Los Angeles - London (LAX - LHR)",

"Flights from Washington, D.C. - London (IAD - LHR)",

"Flights from Newark - London (EWR - LGW)"
]
const paris=[
    "Flights from Boston - Paris (BOS - CDG)",

"Flights from New Windsor - Paris (SWF - CDG)",

"Flights from Newark - Paris (EWR - CDG)",

"Flights from New York - Paris (JFK - CDG)",

"Flights from Miami - Paris (MIA - CDG)",

"Flights from Chicago - Paris (ORD - CDG)",

"Flights from Los Angeles - Paris (LAX - CDG)"
]
const europe=[
   " Flights from Newark - Lisbon (EWR - LIS)",

"Flights from Newark - Barcelona (EWR - BCN)",

"Flights from New York - Lisbon (JFK - LIS)",

"Flights from Newark - London (EWR - LHR)",

"Flights from New York - Barcelona (JFK - BCN)",

"Flights from New York - London (JFK - LHR)",

"Flights from New York - Rome (JFK - FCO)"
]
export {
    NewYork, chicago, lasvegas, orlando, denver, miami, fortlauderdale, washington, sanfrancisco, boston,
    atlanta, seattle, pheonix, hawaii, dallas, honolulu, tampa, sandiego, losangeles, huston, unitedstates,
    london,paris,europe
};