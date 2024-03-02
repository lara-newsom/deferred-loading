import { Injectable, signal } from '@angular/core';

export interface TimeZone {
  name: string;
  offset: number;
  description: string;
  dateFormat: string;
}
@Injectable({
  providedIn: 'root',
})
export class ClockService {
  timeZones: TimeZone[] = [
    {
      name: 'International Date Line West',
      offset: -12,
      description:
        'The International Date Line West time zone is an imaginary line located in the Pacific Ocean, roughly along the 180° longitude line. It is where the calendar day officially begins. This time zone includes uninhabited islands and stretches from the North Pole to the South Pole.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Midway Island, Samoa',
      offset: -11,
      description:
        'The Midway Island, Samoa time zone covers the Midway Atoll in the Pacific Ocean and the islands of Samoa. It is known for its stunning natural beauty, rich Polynesian culture, and vibrant marine life. The time zone includes tropical forests, pristine beaches, and coral reefs.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Hawaii',
      offset: -10,
      description:
        'The Hawaii time zone encompasses the Hawaiian Islands, a group of volcanic islands located in the central Pacific Ocean. Hawaii is renowned for its stunning landscapes, including beaches, waterfalls, and lush rainforests. It is also known for its unique blend of Hawaiian and American cultures.',
      dateFormat: 'MM/DD/YYYY',
    },
    {
      name: 'International Date Line West',
      offset: -12,
      description:
        'The International Date Line West time zone is an imaginary line located in the Pacific Ocean, roughly along the 180° longitude line. It is where the calendar day officially begins. This time zone includes uninhabited islands and stretches from the North Pole to the South Pole.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Midway Island, Samoa',
      offset: -11,
      description:
        'The Midway Island, Samoa time zone covers the Midway Atoll in the Pacific Ocean and the islands of Samoa. It is known for its stunning natural beauty, rich Polynesian culture, and vibrant marine life. The time zone includes tropical forests, pristine beaches, and coral reefs.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Hawaii',
      offset: -10,
      description:
        'The Hawaii time zone encompasses the Hawaiian Islands, a group of volcanic islands located in the central Pacific Ocean. Hawaii is renowned for its stunning landscapes, including beaches, waterfalls, and lush rainforests. It is also known for its unique blend of Hawaiian and American cultures.',
      dateFormat: 'MM/DD/YYYY',
    },
    {
      name: 'Alaska',
      offset: -9,
      description:
        'The Alaska time zone covers the state of Alaska, the largest and northernmost state in the United States. Known for its vast wilderness areas, glaciers, and abundant wildlife, Alaska offers stunning natural beauty and outdoor recreational opportunities, including hiking, fishing, and wildlife viewing.',
      dateFormat: 'MM-DD-YYYY',
    },
    {
      name: 'Pacific Time (US & Canada)',
      offset: -8,
      description:
        'The Pacific Time Zone in the United States and Canada includes regions such as California, Washington, Oregon, and British Columbia. This time zone covers diverse landscapes ranging from coastal beaches and redwood forests to bustling urban centers like Los Angeles and Seattle.',
      dateFormat: 'MM/DD/YYYY',
    },
    {
      name: 'Mountain Time (US & Canada)',
      offset: -7,
      description:
        'The Mountain Time Zone in the United States and Canada encompasses states such as Colorado, Utah, Arizona, and New Mexico. This region is known for its majestic mountain ranges, including the Rocky Mountains, as well as its desert landscapes and vibrant cultural heritage.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Central Time (US & Canada)',
      offset: -6,
      description:
        'The Central Time Zone in the United States and Canada includes states such as Texas, Illinois, Missouri, and Wisconsin. This region features diverse landscapes, including prairies, forests, and lakeshores, as well as vibrant cities like Chicago, Dallas, and Minneapolis.',
      dateFormat: 'YYYY/MM/DD',
    },
    {
      name: 'Eastern Time (US & Canada)',
      offset: -5,
      description:
        'The Eastern Time Zone in the United States and Canada covers densely populated areas such as New York, Florida, Pennsylvania, and Ontario. This region is known for its historic landmarks, cultural institutions, and bustling urban centers, including New York City, Miami, and Toronto.',
      dateFormat: 'MM-DD-YYYY',
    },
    {
      name: 'Atlantic Time (Canada)',
      offset: -4,
      description:
        'The Atlantic Time Zone in Canada includes provinces such as Nova Scotia, New Brunswick, Prince Edward Island, and Newfoundland and Labrador. This region is known for its rugged coastline, maritime heritage, and charming coastal communities, as well as vibrant cultural festivals.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Newfoundland',
      offset: -3.5,
      description:
        'Newfoundland Standard Time is observed in the province of Newfoundland and Labrador in Canada. This region is known for its stunning coastal landscapes, historic fishing villages, and rich cultural heritage, including unique dialects and traditional music.',
      dateFormat: 'YYYY/MM/DD',
    },
    {
      name: 'Brasilia, Buenos Aires, Georgetown',
      offset: -3,
      description:
        'The Brasilia, Buenos Aires, Georgetown time zone covers parts of South America, including Brazil, Argentina, and Guyana. This region is known for its diverse landscapes, including tropical rainforests, majestic mountains, and vibrant cities like Rio de Janeiro, Buenos Aires, and Georgetown.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Mid-Atlantic',
      offset: -2,
      description:
        'The Mid-Atlantic time zone is located between the Eastern Time Zone and the Azores Time Zone. It includes areas such as Bermuda, the Azores, and the Cape Verde Islands. This region features a mix of tropical and subtropical climates, with beautiful beaches and cultural attractions.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Azores, Cabo Verde Is.',
      offset: -1,
      description:
        'The Azores, Cabo Verde Islands time zone covers the Azores archipelago in Portugal and the Cape Verde Islands off the coast of West Africa. These volcanic islands offer stunning natural beauty, including dramatic coastlines, lush valleys, and unique flora and fauna.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Greenwich Mean Time',
      offset: 0,
      description:
        'Greenwich Mean Time (GMT) is the mean solar time at the Royal Observatory in Greenwich, London, used as a standard time reference around the world. It is located at the prime meridian (0° longitude) and serves as the basis for coordinating time zones globally.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Amsterdam, Berlin, Rome, Paris, Vienna',
      offset: 1,
      description:
        'The Amsterdam, Berlin, Rome, Paris, Vienna time zone covers much of Western and Central Europe, including cities such as Amsterdam, Berlin, Rome, Paris, and Vienna. This region is known for its rich history, cultural heritage, and iconic landmarks, including museums, cathedrals, and palaces.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Athens, Helsinki, Istanbul, Cairo, E. Europe',
      offset: 2,
      description:
        'The Athens, Helsinki, Istanbul, Cairo, Eastern Europe time zone covers Eastern Europe, the Eastern Mediterranean, and parts of the Middle East and North Africa. This region is known for its diverse cultures, historic sites, and vibrant cities, including Athens, Istanbul, Cairo, and Moscow.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Baghdad, Kuwait, Nairobi, Moscow',
      offset: 3,
      description:
        'The Baghdad, Kuwait, Nairobi, Moscow time zone covers areas such as the Middle East, East Africa, and Western Russia. This region is known for its rich history, cultural diversity, and geopolitical significance, with bustling cities, ancient ruins, and stunning landscapes.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Tehran',
      offset: 3.5,
      description:
        'The Tehran time zone is observed in Iran, a country located in the Middle East. Tehran, the capital city, is known for its rich history, vibrant culture, and stunning architecture, including mosques, palaces, and bazaars. Iran is also renowned for its hospitality and cuisine.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Abu Dhabi, Muscat, Baku, Tbilisi',
      offset: 4,
      description:
        'The Abu Dhabi, Muscat, Baku, Tbilisi time zone covers parts of the Arabian Peninsula, the Caucasus region, and Central Asia. This region is known for its diverse landscapes, including deserts, mountains, and coastal areas, as well as its rich cultural heritage and modern cities.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Kabul',
      offset: 4.5,
      description:
        'The Kabul time zone is observed in Afghanistan, a landlocked country in Central Asia. Kabul, the capital city, is known for its historic landmarks, including the Kabul River, Babur Gardens, and the historic Old City. Afghanistan has a rich cultural heritage and diverse ethnic groups.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Islamabad, Karachi, Tashkent',
      offset: 5,
      description:
        'The Islamabad, Karachi, Tashkent time zone covers areas such as Pakistan, Uzbekistan, and parts of Central Asia. This region is known for its diverse cultures, historic sites, and scenic landscapes, including the Karakoram Mountains, Silk Road routes, and ancient cities.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Kolkata, Chennai, Mumbai, New Delhi',
      offset: 5.5,
      description:
        'The Kolkata, Chennai, Mumbai, New Delhi time zone covers India, a vast and diverse country in South Asia. India is known for its rich history, cultural heritage, and stunning landmarks, including the Taj Mahal, ancient temples, and bustling cities like Mumbai and New Delhi.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Kathmandu',
      offset: 5.75,
      description:
        'The Kathmandu time zone is observed in Nepal, a landlocked country in the Himalayas. Kathmandu, the capital city, is known for its historic temples, palaces, and vibrant street life. Nepal is renowned for its stunning mountain landscapes and cultural diversity.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Astana, Dhaka',
      offset: 6,
      description:
        'The Astana, Dhaka time zone covers areas such as Kazakhstan and Bangladesh in Central and South Asia. This region is known for its diverse landscapes, including steppes, mountains, and rivers, as well as its rich cultural heritage and modern urban centers.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Yangon, Cocos Islands',
      offset: 6.5,
      description:
        'The Yangon, Cocos Islands time zone covers Myanmar (Burma) in Southeast Asia and the Cocos (Keeling) Islands in the Indian Ocean. Myanmar is known for its ancient temples, pagodas, and cultural heritage, while the Cocos Islands offer pristine beaches and coral reefs.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Bangkok, Hanoi, Jakarta',
      offset: 7,
      description:
        'The Bangkok, Hanoi, Jakarta time zone covers areas such as Thailand, Vietnam, and Indonesia in Southeast Asia. This region is known for its diverse cultures, historic landmarks, and natural beauty, including tropical beaches, lush jungles, and bustling cities.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Beijing, Hong Kong, Kuala Lumpur, Singapore',
      offset: 8,
      description:
        'The Beijing, Hong Kong, Kuala Lumpur, Singapore time zone covers China, Hong Kong, Malaysia, Singapore, and parts of Southeast Asia. This region is known for its dynamic economies, modern cities, and cultural landmarks, including the Great Wall, Petronas Towers, and Marina Bay Sands.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Tokyo, Seoul, Osaka, Sapporo, Yakutsk',
      offset: 9,
      description:
        'The Tokyo, Seoul, Osaka, Sapporo, Yakutsk time zone covers Japan, South Korea, and parts of Eastern Russia. This region is known for its advanced technology, vibrant pop culture, and historic traditions, as well as its stunning natural landscapes and delicious cuisine.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Adelaide, Darwin',
      offset: 9.5,
      description:
        'The Adelaide, Darwin time zone covers South Australia and the Northern Territory in Australia. Adelaide is known for its cultural festivals, arts scene, and wine regions, while Darwin offers a tropical climate, outdoor adventures, and Aboriginal cultural experiences.',
      dateFormat: 'YYYY/MM/DD',
    },
    {
      name: 'Brisbane, Canberra, Melbourne, Sydney',
      offset: 10,
      description:
        'The Brisbane, Canberra, Melbourne, Sydney time zone covers the eastern states of Queensland, New South Wales, Victoria, and the Australian Capital Territory. This region is known for its stunning beaches, cosmopolitan cities, and iconic landmarks, including the Great Barrier Reef and Sydney Opera House.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Magadan, Solomon Is., New Caledonia',
      offset: 11,
      description:
        'The Magadan, Solomon Islands, New Caledonia time zone covers areas such as the Magadan Oblast in Russia, the Solomon Islands in the Pacific, and New Caledonia in the South Pacific. This region is known for its remote wilderness areas, diverse marine life, and indigenous cultures.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Fiji, Kamchatka, Marshall Is., Wellington',
      offset: 12,
      description:
        'The Fiji, Kamchatka, Marshall Islands, Wellington time zone covers Fiji in the South Pacific, Kamchatka Krai in Russia, the Marshall Islands in the Pacific, and New Zealand. This region is known for its stunning natural beauty, cultural diversity, and outdoor adventures.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: "Nuku'alofa",
      offset: 13,
      description:
        "The Nuku'alofa time zone is observed in Tonga, an island nation in the South Pacific. Nuku'alofa is the capital city and administrative center, known for its scenic harbor, historic landmarks, and vibrant local culture, including traditional dance and music.",
      dateFormat: 'YYYY/MM/DD',
    },
    {
      name: 'South Africa Standard Time',
      offset: 2,
      description:
        'South Africa Standard Time (SAST) is observed in South Africa and neighboring countries such as Lesotho, Swaziland, and Namibia. This region is known for its diverse landscapes, including savannas, mountains, and coastlines, as well as its rich cultural heritage and wildlife.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Iran Standard Time',
      offset: 3.5,
      description:
        'Iran Standard Time (IRST) is observed in Iran, a country located in the Middle East. Iran is known for its rich history, cultural heritage, and stunning architecture, including ancient ruins, mosques, and palaces. The country also has a diverse landscape, ranging from deserts to mountains.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Mauritius Standard Time',
      offset: 4,
      description:
        'Mauritius Standard Time (MUT) is observed in Mauritius and the island of Rodrigues in the Indian Ocean. Mauritius is known for its beautiful beaches, coral reefs, and tropical forests, as well as its multicultural society and vibrant cultural festivals.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Arabian Standard Time',
      offset: 4,
      description:
        'Arabian Standard Time (AST) is observed in countries such as Saudi Arabia, the United Arab Emirates, Oman, and Bahrain. This region is known for its rich history, cultural traditions, and modern cities, as well as its vast deserts, ancient ruins, and Islamic heritage.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Georgia Standard Time',
      offset: 4,
      description:
        'Georgia Standard Time (GET) is observed in Georgia, a country located at the crossroads of Eastern Europe and Western Asia. Georgia is known for its stunning mountain landscapes, ancient churches, and vibrant capital city of Tbilisi, as well as its rich history and cultural heritage.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Afghanistan Time',
      offset: 4.5,
      description:
        'Afghanistan Time (AFT) is observed in Afghanistan, a landlocked country in Central Asia. Afghanistan is known for its rugged mountain ranges, ancient cities, and diverse ethnic groups, as well as its historic landmarks and archaeological sites.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Nepal Time',
      offset: 5.75,
      description:
        'Nepal Time (NPT) is observed in Nepal, a landlocked country in the Himalayas. Nepal is known for its stunning mountain landscapes, including Mount Everest, as well as its rich cultural heritage, ancient temples, and vibrant festivals.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Indian Standard Time',
      offset: 5.5,
      description:
        'Indian Standard Time (IST) is observed in India, the seventh-largest country in the world. India is known for its diverse cultures, historic landmarks, and vibrant festivals, as well as its bustling cities, majestic palaces, and ancient temples.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Pakistan Standard Time',
      offset: 5,
      description:
        'Pakistan Standard Time (PKT) is observed in Pakistan, a country located in South Asia. Pakistan is known for its diverse landscapes, ranging from mountains to deserts, as well as its rich history, cultural heritage, and vibrant cities.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Azerbaijan Standard Time',
      offset: 4,
      description:
        'Azerbaijan Standard Time (AZT) is observed in Azerbaijan, a country located at the crossroads of Eastern Europe and Western Asia. Azerbaijan is known for its rich cultural heritage, historic landmarks, and scenic landscapes, including the Caspian Sea coast and the Caucasus Mountains.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Yakutsk Time',
      offset: 9,
      description:
        'Yakutsk Time (YAKT) is observed in the Sakha Republic (Yakutia) in Eastern Russia. Yakutsk, the capital city, is known for its extreme cold temperatures, permafrost, and unique cultural heritage of the indigenous Yakut people.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Vladivostok Time',
      offset: 10,
      description:
        'Vladivostok Time (VLAT) is observed in the Primorsky Krai region of Russia, including the city of Vladivostok. This region is known for its scenic coastline, diverse wildlife, and cultural diversity influenced by its proximity to East Asia.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Lord Howe Standard Time',
      offset: 10.5,
      description:
        'Lord Howe Standard Time (LHST) is observed on Lord Howe Island, a UNESCO World Heritage-listed island territory of Australia in the Tasman Sea. The island is known for its unique flora and fauna, pristine beaches, and opportunities for outdoor activities such as snorkeling and hiking.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Norfolk Island Time',
      offset: 11,
      description:
        'Norfolk Island Time (NFT) is observed on Norfolk Island, an Australian external territory located in the Pacific Ocean. The island is known for its scenic beauty, including lush forests, rolling hills, and rugged coastline, as well as its fascinating history and vibrant cultural scene.',
      dateFormat: 'YYYY/MM/DD',
    },
    {
      name: 'Magadan Time',
      offset: 11,
      description:
        'Magadan Time (MAGT) is observed in the Magadan Oblast region of Russia, located in the Russian Far East. Magadan is known for its rich history, stunning natural landscapes, and cultural heritage, as well as its extreme climate and abundant wildlife.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Chatham Island Standard Time',
      offset: 12.75,
      description:
        'Chatham Island Standard Time (CHAST) is observed on the Chatham Islands, a group of islands located east of mainland New Zealand. The Chatham Islands are known for their unique flora and fauna, rugged coastlines, and rich Maori heritage.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Tonga Time',
      offset: 13,
      description:
        'Tonga Time (TOT) is observed in the Kingdom of Tonga, an archipelago located in the South Pacific Ocean. Tonga is known for its stunning coral reefs, pristine beaches, and vibrant culture, including traditional dance, music, and art.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Line Islands Time',
      offset: 14,
      description:
        'Line Islands Time (LINT) is observed in the Line Islands, a chain of coral atolls located in the Pacific Ocean. The Line Islands are known for their remote and pristine natural environment, including coral reefs, white sandy beaches, and abundant marine life.',
      dateFormat: 'MM/DD/YYYY',
    },
    {
      name: 'Fernando de Noronha Time',
      offset: -2,
      description:
        'Fernando de Noronha Time (FNT) is observed on the Fernando de Noronha archipelago, a group of islands located off the coast of Brazil in the Atlantic Ocean. The islands are known for their pristine beaches, crystal-clear waters, and rich marine biodiversity.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Argentina Standard Time',
      offset: -3,
      description:
        'Argentina Standard Time (ART) is observed in Argentina, a large South American country known for its diverse landscapes, including the Andes Mountains, the Pampas grasslands, and the Patagonian desert. Argentina is also famous for its tango music, soccer, and vibrant cultural scene.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Newfoundland Daylight Time',
      offset: -2.5,
      description:
        'Newfoundland Daylight Time (NDT) is observed in the province of Newfoundland and Labrador in Canada during daylight saving time. Newfoundland is known for its rugged coastline, historic fishing villages, and vibrant cultural traditions, including unique dialects and music.',
      dateFormat: 'YYYY/MM/DD',
    },
    {
      name: 'Brasília Summer Time',
      offset: -2,
      description:
        'Brasília Summer Time (BRST) is observed in Brazil during daylight saving time. Brazil is known for its diverse ecosystems, including the Amazon Rainforest, the Pantanal wetlands, and the Atlantic Forest, as well as its vibrant culture, music, and festivals.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Chile Standard Time',
      offset: -4,
      description:
        'Chile Standard Time (CLT) is observed in Chile, a long, narrow country stretching along the western edge of South America. Chile is known for its stunning natural beauty, including the Atacama Desert, the Andes Mountains, and the Chilean Patagonia region.',
      dateFormat: 'MM-DD-YYYY',
    },
    {
      name: 'Paraguay Standard Time',
      offset: -4,
      description:
        'Paraguay Standard Time (PYT) is observed in Paraguay, a landlocked country in South America known for its Guarani culture, Jesuit missions, and lush countryside. Paraguay is also famous for its traditional yerba mate tea and lively festivals.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Falkland Islands Time',
      offset: -3,
      description:
        'Falkland Islands Time (FKT) is observed in the Falkland Islands, a British Overseas Territory located in the South Atlantic Ocean. The Falkland Islands are known for their rugged terrain, diverse wildlife, and rich history, including the 1982 Falklands War.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Eastern Greenland Time',
      offset: -1,
      description:
        "Eastern Greenland Time (EGT) is observed in the eastern part of Greenland, the world's largest island. Greenland is known for its stunning landscapes, including glaciers, fjords, and icebergs, as well as its indigenous Inuit culture and wildlife such as polar bears and whales.",
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Western Greenland Time',
      offset: -3,
      description:
        'Western Greenland Time (WGT) is observed in the western part of Greenland. Greenland is known for its stunning landscapes, including glaciers, fjords, and icebergs, as well as its indigenous Inuit culture and wildlife such as polar bears and whales.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Eastern European Time',
      offset: 2,
      description:
        'Eastern European Time (EET) is observed in countries such as Bulgaria, Estonia, Greece, and Finland. This region is known for its rich history, cultural heritage, and vibrant cities, as well as its stunning natural landscapes and diverse ecosystems.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Central European Time',
      offset: 1,
      description:
        'Central European Time (CET) is observed in countries such as Germany, France, Italy, and Spain. This region is known for its diverse cultures, historic landmarks, and vibrant cities, as well as its picturesque landscapes and culinary traditions.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'West Africa Time',
      offset: 1,
      description:
        'West Africa Time (WAT) is observed in countries such as Nigeria, Ghana, and Senegal. This region is known for its diverse cultures, historic sites, and vibrant music and dance traditions, as well as its stunning beaches and wildlife reserves.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Central Africa Time',
      offset: 2,
      description:
        'Central Africa Time (CAT) is observed in countries such as South Africa, Zambia, and Zimbabwe. This region is known for its diverse landscapes, including savannas, deserts, and rainforests, as well as its rich biodiversity and cultural heritage.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'East Africa Time',
      offset: 3,
      description:
        'East Africa Time (EAT) is observed in countries such as Kenya, Tanzania, and Uganda. This region is known for its stunning natural beauty, including national parks, mountains, and lakes, as well as its diverse wildlife and vibrant cultures.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Azores Time',
      offset: -1,
      description:
        'Azores Time (AZOT) is observed in the Azores, an autonomous region of Portugal located in the Atlantic Ocean. The Azores are known for their stunning volcanic landscapes, lush greenery, and unique Azorean culture.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Cape Verde Time',
      offset: -1,
      description:
        'Cape Verde Time (CVT) is observed in Cape Verde, an island country located off the coast of West Africa. Cape Verde is known for its beautiful beaches, vibrant music and dance culture, and historic colonial architecture.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Brasília Time',
      offset: -3,
      description:
        "Brasília Time (BRT) is observed in Brazil, covering most of the country's territory, including its capital city, Brasília. Brazil is known for its diverse ecosystems, rich biodiversity, and vibrant cultural heritage.",
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Amazon Time',
      offset: -4,
      description:
        "Amazon Time (AMT) is observed in the western part of Brazil, including the Amazon rainforest region. The Amazon rainforest is known for its unparalleled biodiversity, indigenous cultures, and vital role in regulating the Earth's climate.",
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Falkland Island Summer Time',
      offset: -3,
      description:
        'Falkland Island Summer Time (FKST) is observed in the Falkland Islands during daylight saving time. The Falkland Islands are known for their rugged beauty, diverse wildlife, and rich history.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'South Georgia Time',
      offset: -2,
      description:
        'South Georgia Time (GST) is observed in South Georgia and the South Sandwich Islands, British Overseas Territories in the southern Atlantic Ocean. These remote islands are known for their stunning scenery, abundant wildlife, and historic whaling stations.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Galapagos Time',
      offset: -6,
      description:
        'Galapagos Time (GALT) is observed in the Galapagos Islands, an archipelago located in the Pacific Ocean off the coast of Ecuador. The Galapagos Islands are known for their unique wildlife, including giant tortoises, marine iguanas, and blue-footed boobies.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Easter Island Time',
      offset: -6,
      description:
        'Easter Island Time (EAST) is observed on Easter Island, a remote volcanic island in the southeastern Pacific Ocean. Easter Island is famous for its monumental statues called moai, which were carved by the indigenous Rapa Nui people.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Hawaii-Aleutian Standard Time',
      offset: -10,
      description:
        'Hawaii-Aleutian Standard Time (HAST) is observed in Hawaii and the Aleutian Islands of Alaska. Hawaii is known for its stunning beaches, volcanic landscapes, and rich Polynesian culture, while the Aleutian Islands are known for their rugged beauty and rich Native Alaskan heritage.',
      dateFormat: 'MM/DD/YYYY',
    },
    {
      name: 'Marquesas Time',
      offset: -9.5,
      description:
        'Marquesas Time (MART) is observed in the Marquesas Islands, an archipelago in French Polynesia in the South Pacific Ocean. The Marquesas Islands are known for their dramatic landscapes, ancient archaeological sites, and vibrant Polynesian culture.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Alaska Standard Time',
      offset: -9,
      description:
        'Alaska Standard Time (AKST) is observed in the state of Alaska, USA. Alaska is known for its stunning wilderness areas, including Denali National Park, as well as its diverse wildlife, including bears, moose, and whales.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Pacific Standard Time',
      offset: -8,
      description:
        'Pacific Standard Time (PST) is observed in the western part of the United States and Canada, including states such as California, Oregon, and Washington. This region is known for its diverse landscapes, from sandy beaches to towering mountains, as well as its vibrant cities and cultural attractions.',
      dateFormat: 'MM/DD/YYYY',
    },
    {
      name: 'Mountain Standard Time',
      offset: -7,
      description:
        'Mountain Standard Time (MST) is observed in the mountainous regions of the United States and Canada, including states such as Colorado, Utah, and Arizona. This region is known for its stunning natural beauty, including national parks, ski resorts, and desert landscapes.',
      dateFormat: 'MM/DD/YYYY',
    },
    {
      name: 'Central Standard Time',
      offset: -6,
      description:
        'Central Standard Time (CST) is observed in the central part of the United States and Canada, including states such as Texas, Illinois, and Missouri. This region is known for its diverse cultures, historic landmarks, and vibrant music and food scenes.',
      dateFormat: 'MM/DD/YYYY',
    },
    {
      name: 'Eastern Standard Time',
      offset: -5,
      description:
        'Eastern Standard Time (EST) is observed in the eastern part of the United States and Canada, including states such as New York, Florida, and Ontario. This region is known for its bustling cities, historic sites, and cultural attractions.',
      dateFormat: 'MM/DD/YYYY',
    },
    {
      name: 'Samoa Standard Time',
      offset: 13,
      description:
        'Samoa Standard Time (SST) is observed in Samoa, a group of islands in the South Pacific Ocean. Samoa is known for its stunning beaches, lush rainforests, and vibrant Polynesian culture, including traditional dance and music.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Tokelau Time',
      offset: 13,
      description:
        'Tokelau Time (TKT) is observed in Tokelau, a territory of New Zealand located in the South Pacific Ocean. Tokelau is known for its coral atolls, pristine waters, and rich marine biodiversity, as well as its strong cultural heritage.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Chatham Island Daylight Time',
      offset: 13.75,
      description:
        'Chatham Island Daylight Time (CHADT) is observed on the Chatham Islands, a group of islands located east of mainland New Zealand. The Chatham Islands are known for their unique flora and fauna, rugged coastlines, and rich Maori heritage.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Line Islands Daylight Time',
      offset: 14,
      description:
        'Line Islands Daylight Time (LIDT) is observed in the Line Islands, a chain of coral atolls located in the Pacific Ocean. The Line Islands are known for their remote and pristine natural environment, including coral reefs, white sandy beaches, and abundant marine life.',
      dateFormat: 'MM/DD/YYYY',
    },
    {
      name: 'Baker Island Time',
      offset: -12,
      description:
        'Baker Island Time (BIT) is observed on Baker Island, an uninhabited atoll in the Pacific Ocean, controlled by the United States as an unincorporated territory. Baker Island is known for its abundant bird life and coral reefs.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Howland Island Time',
      offset: -12,
      description:
        'Howland Island Time (HIT) is observed on Howland Island, an uninhabited coral island in the Pacific Ocean, controlled by the United States as an unincorporated territory. Howland Island is known for its tropical vegetation and bird species.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Baker Island Time',
      offset: -12,
      description:
        'Baker Island Time (BIT) is observed on Baker Island, an uninhabited atoll in the Pacific Ocean, controlled by the United States as an unincorporated territory. Baker Island is known for its abundant bird life and coral reefs.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Howland Island Time',
      offset: -12,
      description:
        'Howland Island Time (HIT) is observed on Howland Island, an uninhabited coral island in the Pacific Ocean, controlled by the United States as an unincorporated territory. Howland Island is known for its tropical vegetation and bird species.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Tropical Island Time (TIT)',
      offset: -5,
      description:
        'Tropical Island Time (TIT) is observed on a fictional tropical island paradise located in the Pacific Ocean. The island is known for its pristine beaches, crystal-clear waters, lush rainforests, and abundant marine life. TIT follows the relaxed pace of island life, with locals enjoying activities such as snorkeling, surfing, and hammock lounging.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Frosty Mountain Time (FMT)',
      offset: -7,
      description:
        'Frosty Mountain Time (FMT) is observed in the remote mountain ranges of a fictional icy wilderness. The region is characterized by snow-capped peaks, frozen lakes, and dense pine forests. FMT residents are hardy adventurers, enjoying activities such as skiing, ice climbing, and husky sledding.',
      dateFormat: 'MM/DD/YYYY',
    },
    {
      name: 'Cosmic Time (COT)',
      offset: 0,
      description:
        'Cosmic Time (COT) is a time zone that transcends earthly boundaries, aligning with the rhythm of the cosmos itself. It is observed by celestial beings, intergalactic travelers, and those who seek to explore the mysteries of the universe. COT is not bound by conventional date formats, as its inhabitants navigate time and space beyond human comprehension.',
      dateFormat: 'Eons/Multiverses/Dimensions',
    },
    {
      name: 'Sunrise Valley Time (SVT)',
      offset: -6,
      description:
        "Sunrise Valley Time (SVT) is observed in the picturesque Sunrise Valley, nestled between majestic mountains and lush forests. SVT residents wake up to breathtaking sunrise vistas and spend their days hiking through scenic trails, picnicking by tranquil streams, and enjoying the abundance of nature's beauty.",
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Moonlit Coast Time (MCT)',
      offset: 3,
      description:
        'Moonlit Coast Time (MCT) is observed along the enchanting Moonlit Coast, where moonbeams dance on the tranquil waters of the ocean. MCT residents indulge in evening strolls along moonlit beaches, bonfire gatherings under the starry sky, and tales of mermaids and sea creatures.',
      dateFormat: 'MM/DD/YYYY',
    },
    {
      name: 'Eternal Forest Time (EFT)',
      offset: 2,
      description:
        'Eternal Forest Time (EFT) is observed in the heart of the Eternal Forest, a mystical woodland where ancient trees whisper secrets of the past. EFT residents commune with nature, practicing forest bathing, meditation under the canopy, and honoring the spirits of the forest.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Golden Sands Time (GST)',
      offset: 4,
      description:
        'Golden Sands Time (GST) is observed in the idyllic Golden Sands region, known for its pristine beaches, turquoise waters, and vibrant marine life. GST residents enjoy leisurely beach days, snorkeling adventures, and sunset beach bonfires.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Enchanted Valley Time (EVT)',
      offset: -7,
      description:
        'Enchanted Valley Time (EVT) is observed in the mystical Enchanted Valley, where sparkling waterfalls cascade into emerald pools and colorful butterflies flit among exotic flowers. EVT residents live in harmony with nature, practicing ancient rituals and celebrating the magic of the valley.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Celestial Peak Time (CPT)',
      offset: 8,
      description:
        'Celestial Peak Time (CPT) is observed atop Celestial Peak, the highest summit in the land, where clouds swirl around rocky peaks and eagles soar above mist-covered valleys. CPT residents are adventurers and mountaineers, seeking the thrill of scaling towering cliffs and witnessing awe-inspiring sunrises.',
      dateFormat: 'MM/DD/YYYY',
    },
    {
      name: 'Serenity Bay Time (SBT)',
      offset: -5,
      description:
        'Serenity Bay Time (SBT) is observed in the tranquil Serenity Bay, a secluded cove bordered by lush forests and rocky cliffs. SBT residents find solace in the rhythmic lapping of waves, practicing yoga on secluded beaches and finding inspiration in the natural beauty that surrounds them.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Mystic Meadows Time (MMT)',
      offset: 6,
      description:
        'Mystic Meadows Time (MMT) is observed in the mystical Mystic Meadows, where wildflowers carpet rolling hills and ancient oak trees whisper secrets of the past. MMT residents live in harmony with the land, tending to organic gardens, hosting vibrant festivals, and communing with the spirits of the meadows.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Eternal Twilight Time (ETT)',
      offset: -4,
      description:
        'Eternal Twilight Time (ETT) is observed in the realm of Eternal Twilight, where shadows dance in perpetual twilight and mystical creatures roam the darkened forests. ETT residents are nocturnal beings, reveling in moonlit gatherings, starlit ceremonies, and tales of magic and wonder.',
      dateFormat: 'MM/DD/YYYY',
    },
    {
      name: 'Azure Isles Time (AIT)',
      offset: 3,
      description:
        'Azure Isles Time (AIT) is observed among the Azure Isles, a cluster of tropical islands surrounded by azure waters teeming with vibrant coral reefs and exotic marine life. AIT residents embrace island living, sailing crystal-clear seas, basking in the warm sun, and sharing in the rich culture of the islands.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: 'Eternal Flame Time (EFT)',
      offset: 2,
      description:
        'Eternal Flame Time (EFT) is observed in the land of the Eternal Flame, where an eternal fire burns at the heart of a sacred temple, casting a warm glow across the land. EFT residents gather around the flame for ceremonies, rituals, and moments of reflection.',
      dateFormat: 'YYYY-MM-DD',
    },
    {
      name: 'Crystal Lake Time (CLT)',
      offset: -6,
      description:
        'Crystal Lake Time (CLT) is observed around the tranquil waters of Crystal Lake, where crystal-clear waters mirror the surrounding forests and snow-capped mountains. CLT residents find serenity in lakeside retreats, canoeing on glassy waters, and communing with nature.',
      dateFormat: 'DD/MM/YYYY',
    },
    {
      name: "Dreamer's Dawn Time (DDT)",
      offset: 5,
      description:
        "Dreamer's Dawn Time (DDT) is observed in the realm of Dreamer's Dawn, where dreams take flight on the wings of imagination and possibilities are limitless. DDT residents are dreamers and visionaries, exploring the realms of creativity, inspiration, and self-discovery.",
      dateFormat: 'MM/DD/YYYY',
    },
  ];
  sortedTimeZones = this.timeZones.sort((a, b) => a.offset - b.offset);
  selectedTimeZone = signal<TimeZone>(this.sortedTimeZones[0]);
  selectTimeZone(name: string) {
    const timeZone = this.timeZones.find((zone) => zone.name === name) || this.sortedTimeZones[0];
    this.selectedTimeZone.set(timeZone);
  }

  description: string = `
    Petra Dubois, a 56-year-old woman with a lifetime of experiences etched into the lines of her weathered face, resides in a secluded cabin nestled amidst the pristine wilderness of Colorado. Born and raised in the heart of the Midwest, Petra's childhood was imbued with the simple joys of rural life - the vast expanse of cornfields stretching towards the horizon, the gentle murmur of creeks winding through the countryside, and the warmth of community that permeated every corner of her small town.
    As Petra grew older, her restless spirit yearned for adventure beyond the familiar confines of her hometown. Drawn by the allure of the untamed wilderness and the promise of boundless freedom, she bid farewell to the flatlands of the Midwest and embarked on a journey westward, towards the towering peaks and sprawling forests of the Rocky Mountains.
    It was amidst the rugged grandeur of Colorado's mountainous terrain that Petra found her true calling - a rustic cabin nestled amidst a grove of towering pine trees, where she could retreat from the noise of the world and commune with nature in its purest form. Here, in this sanctuary of solitude, Petra discovered a sense of peace and contentment that had eluded her for so long.
    But Petra's solitude was never truly solitary, for she shared her humble abode with a motley crew of furry companions - fifteen cats, each with their own unique quirks and personalities. From the wise old tabby who spent his days basking in the sun's warm embrace to the playful calico who could always be found chasing shadows in the moonlight, Petra's feline friends were her constant companions in the quietude of her mountain retreat.
    Yet amidst the tranquil beauty of her surroundings, Petra found herself yearning for a connection to the outside world - a way to bridge the gap between her secluded sanctuary and the bustling cities and far-off lands that lay beyond. It was this desire for connection that sparked an idea in Petra's mind - a web application that could unite people from all corners of the globe in the shared experience of time.
    With her background in programming and a keen eye for design, Petra set to work bringing her vision to life. Drawing inspiration from the natural beauty that surrounded her - the rugged peaks that pierced the sky, the whispering winds that rustled through the trees, the shimmering stars that danced in the night sky - she crafted a digital platform that would allow users to track the passage of time in locations across the world.
    But Petra's web application was more than just a tool for telling time - it was a gateway to connection, a means of bridging the vast distances that separated her from the rest of humanity. Through her creation, Petra could reach out to friends and family scattered across the globe, sharing moments and memories with loved ones in real-time, no matter how far apart they may be.
    Today, Petra's web application stands as a testament to the power of technology to transcend the boundaries of space and time, bringing people together in ways that were once unimaginable. From her cozy cabin in the Colorado wilderness, she continues to tend to her feline companions with love and care, all the while knowing that her creation has brought a little bit of her mountain magic to every corner of the globe.
    `;

    petraTravels: string = `
    Petra Dubois, an intrepid explorer and fervent cat aficionado, has embarked on an odyssey spanning continents in her relentless pursuit of feline companionship. From the bustling streets of Tokyo to the tranquil villages of Bali, Petra's wanderlust knows no bounds as she seeks to unravel the mysteries of the world's most enchanting feline inhabitants.
    In the neon-lit metropolis of Tokyo, Petra found herself captivated by the grace and elegance of the Japanese Bobtail, a breed steeped in tradition and revered for its playful nature. Amidst the hustle and bustle of Shibuya and the serene gardens of Kyoto, she encountered feline denizens lounging languidly in the afternoon sun, their fur aglow with hues of silver and gold.
    Journeying westward, Petra ventured into the sun-kissed embrace of the Mediterranean, where the ancient ruins of Greece provided a backdrop for her encounters with the Aegean cat. With its striking blue eyes and affectionate disposition, this native breed stole Petra's heart as she roamed the cobbled streets of Athens and explored the idyllic isles of Mykonos and Santorini.
    But Petra's travels were not confined to the well-trodden paths of tourist destinations - she sought out the company of cats in the most unlikely of locales. In the bustling souks of Marrakech, she crossed paths with street cats adorned in sleek black fur, their emerald eyes glinting mischievously amidst the labyrinthine alleys and bustling bazaars.
    In the verdant paradise of Bali, Petra found herself ensconced in a world of tropical splendor, where friendly felines roamed freely amidst the lush rice terraces and cascading waterfalls. From the sleepy villages of Ubud to the sun-drenched beaches of Seminyak, she reveled in the playful antics of her furry companions, their purrs echoing through the balmy island air.
    And in the shadow of the ancient pyramids of Egypt, Petra stood in awe as she beheld the majesty of the Egyptian Mau, a breed steeped in myth and legend. With its spotted coat and regal bearing, this revered feline captivated Petra's imagination as she explored the timeless wonders of Cairo and cruised along the storied banks of the Nile.
    As Petra continues her journey across the globe, she does so with a heart full of wonder and a spirit of adventure, knowing that wherever she goes, she will always find a kindred spirit in the company of cats.
    `;

    countries: { name: string, country: string, date: string, description: string }[] = [
      {
        name: "Shinjuku",
        country: "Japan",
        date: "May 12, 1995",
        description: "Petra visited Shinjuku, a vibrant district in Tokyo, Japan, on May 12, 1995. She was enthralled by the bustling streets filled with neon lights, towering skyscrapers, and bustling crowds. Petra spent her days exploring the eclectic shops and trendy cafes, immersing herself in the unique blend of modernity and tradition that defines Shinjuku. She particularly enjoyed visiting the famous Robot Restaurant, where she marveled at the dazzling performances and futuristic decor. But it was the quiet moments in Shinjuku Gyoen National Garden, amidst the cherry blossoms and tranquil ponds, that Petra cherished most. Here, amidst the serene beauty of nature, she found a sense of peace and tranquility amidst the chaos of the city."
    },
    {
        name: "Athens",
        country: "Greece",
        date: "July 28, 2002",
        description: "Petra explored the ancient city of Athens, Greece, on July 28, 2002. She wandered through the labyrinthine streets of the Plaka district, admiring the centuries-old architecture and vibrant street art. Petra marveled at the iconic landmarks of the Acropolis and the Parthenon, their ancient stones steeped in history and legend. She sampled traditional Greek cuisine at bustling tavernas and savored the flavors of souvlaki, tzatziki, and baklava. But it was the enchanting island of Hydra that stole Petra's heart. With its charming harbor, turquoise waters, and winding cobblestone streets, Hydra offered a glimpse into a bygone era of simplicity and serenity. Here, amidst the tranquil beauty of the Aegean Sea, Petra found a sense of peace and contentment that lingered long after her departure."
    },
    {
        name: "Marrakech",
        country: "Morocco",
        date: "September 15, 2010",
        description: "Petra ventured into the vibrant city of Marrakech, Morocco, on September 15, 2010. She was immediately captivated by the city's bustling souks, where vibrant colors, exotic scents, and lively sounds filled the air. Petra explored the winding alleys of the Medina, admiring the intricate architecture of the Bahia Palace and the towering minaret of the Koutoubia Mosque. She sampled traditional Moroccan cuisine, savoring the flavors of tagine, couscous, and mint tea. But it was the tranquil oasis of the Jardin Majorelle that captured Petra's heart. Amidst the lush greenery, vibrant flowers, and serene pools, she found a moment of respite from the hustle and bustle of the city, immersing herself in the natural beauty and tranquility of this hidden gem."
    },
    {
        name: "Ubud",
        country: "Indonesia",
        date: "November 5, 2018",
        description: "Petra journeyed to the picturesque town of Ubud, located amidst the lush rice terraces and verdant jungles of Bali, Indonesia, on November 5, 2018. She was immediately enchanted by the town's vibrant arts scene, bustling markets, and tranquil surroundings. Petra explored the Monkey Forest Sanctuary, where playful macaques frolicked amidst ancient temples and towering trees. She participated in a traditional Balinese cooking class, learning to prepare fragrant curries and spicy sambals using fresh local ingredients. But it was the serene beauty of the Tegalalang Rice Terraces that captured Petra's heart. Here, amidst the emerald-green paddies and cascading waterfalls, she found a sense of peace and tranquility that rejuvenated her spirit and left a lasting impression."
    },
    {
        name: "Cairo",
        country: "Egypt",
        date: "March 20, 1989",
        description: "Petra embarked on a journey to Cairo, Egypt, on March 20, 1989. She marveled at the ancient wonders of the city, including the Great Pyramid of Giza, the Sphinx, and the Egyptian Museum. Petra immersed herself in the vibrant culture of the bustling metropolis, exploring the bustling markets of Khan El Khalili and sampling traditional Egyptian cuisine. But it was the majestic beauty of the Nile River that captured Petra's heart. Here, amidst the timeless beauty of the river, she found a sense of awe and wonder that left an indelible mark on her soul."
    },
    {
        name: "Kyoto",
        country: "Japan",
        date: "October 10, 2015",
        description: "Petra traveled to the historic city of Kyoto, Japan, on October 10, 2015. She was captivated by the city's rich cultural heritage, including its traditional tea houses, ancient temples, and stunning gardens. Petra explored the iconic Fushimi Inari Shrine, with its thousands of vermilion torii gates winding through the forested hillsides. She also visited the serene Arashiyama Bamboo Grove, where the rustling bamboo leaves created a sense of tranquility and serenity. But it was the serene beauty of Kinkaku-ji, the Golden Pavilion, that left the greatest impression on Petra. Here, amidst the shimmering waters of the reflecting pond and the golden glow of the pavilion, she found a sense of peace and tranquility that lingered long after her departure."
    },
    {
        name: "Paris",
        country: "France",
        date: "April 1, 1999",
        description: "Petra journeyed to the romantic city of Paris, France, on April 1, 1999. She was enchanted by the city's iconic landmarks, including the Eiffel Tower, Notre Dame Cathedral, and the Louvre Museum. Petra explored the charming neighborhoods of Montmartre and Le Marais, wandering through cobblestone streets lined with quaint cafes and boutiques. She indulged in decadent pastries and fine French cuisine, savoring the flavors of croissants, macarons, and escargot. But it was the peaceful beauty of the Jardin des Tuileries that captured Petra's heart. Here, amidst the meticulously manicured gardens and tranquil fountains, she found a moment of respite from the hustle and bustle of the city, immersing herself in the natural beauty and serenity of this hidden oasis."
    },
    {
      name: "Istanbul",
      country: "Turkey",
      date: "June 7, 2005",
      description: "Petra explored the historic city of Istanbul, Turkey, on June 7, 2005. She marveled at the city's rich tapestry of cultures, spanning centuries of history and tradition. Petra visited iconic landmarks such as the Hagia Sophia, the Blue Mosque, and the Topkapi Palace, each one a testament to Istanbul's storied past. She wandered through the bustling bazaars of the Grand Bazaar and the Spice Market, where she sampled exotic spices, colorful textiles, and sweet Turkish delights. But it was the serene beauty of the Bosphorus Strait that captivated Petra's heart. Here, amidst the shimmering waters and picturesque waterfront mansions, she found a sense of peace and tranquility that lingered long after her departure."
  },
  {
      name: "Sydney",
      country: "Australia",
      date: "September 20, 2013",
      description: "Petra ventured to the vibrant city of Sydney, Australia, on September 20, 2013. She was immediately captivated by the city's stunning harbor, iconic landmarks, and laid-back atmosphere. Petra visited the Sydney Opera House, where she attended a mesmerizing performance and marveled at the architectural marvel's sweeping sails. She explored the historic Rocks district, wandered through the lush botanical gardens, and soaked up the sun on the world-famous Bondi Beach. But it was the eclectic street art scene of Newtown that captured Petra's heart. Here, amidst the colorful murals and vibrant graffiti, she found a sense of creativity and expression that resonated deeply with her soul."
  },
  {
      name: "Prague",
      country: "Czech Republic",
      date: "March 15, 2008",
      description: "Petra journeyed to the enchanting city of Prague, Czech Republic, on March 15, 2008. She was immediately captivated by the city's stunning architecture, cobblestone streets, and rich history. Petra explored iconic landmarks such as Prague Castle, Charles Bridge, and the Astronomical Clock in the Old Town Square. She wandered through the charming neighborhoods of Mala Strana and Josefov, sampling traditional Czech cuisine and sipping on local beers in cozy taverns. But it was the timeless beauty of the Vltava River that captured Petra's heart. Here, amidst the picturesque waterfront and historic bridges, she found a sense of tranquility and serenity that lingered long after her departure."
  },
  {
      name: "Cape Town",
      country: "South Africa",
      date: "November 10, 2016",
      description: "Petra embarked on a journey to the breathtaking city of Cape Town, South Africa, on November 10, 2016. She was immediately captivated by the city's stunning natural beauty, vibrant culture, and rich history. Petra explored iconic landmarks such as Table Mountain, Robben Island, and the colorful Bo-Kaap neighborhood. She ventured into the Cape Winelands, where she sampled world-class wines and savored gourmet cuisine in picturesque vineyards. But it was the pristine beaches of Clifton and Camps Bay that captured Petra's heart. Here, amidst the golden sands and azure waters, she found a sense of peace and tranquility that rejuvenated her spirit and left a lasting impression."
  },
  {
      name: "Reykjavik",
      country: "Iceland",
      date: "April 25, 2019",
      description: "Petra ventured to the enchanting city of Reykjavik, Iceland, on April 25, 2019. She was immediately captivated by the city's otherworldly landscapes, vibrant arts scene, and unique culture. Petra explored iconic landmarks such as the Hallgrímskirkja church, the Harpa Concert Hall, and the colorful streets of Laugavegur. She ventured into the Icelandic countryside, where she marveled at dramatic waterfalls, steaming geysers, and bubbling hot springs. But it was the ethereal beauty of the Northern Lights that captured Petra's heart. Here, amidst the dancing ribbons of light in the night sky, she found a sense of wonder and awe that left an indelible mark on her soul."
  },
  {
      name: "Machu Picchu",
      country: "Peru",
      date: "August 18, 2003",
      description: "Petra embarked on a journey to the legendary ruins of Machu Picchu, Peru, on August 18, 2003. She was immediately captivated by the ancient Incan citadel, nestled amidst the mist-shrouded peaks of the Andes Mountains. Petra hiked the famed Inca Trail, winding through rugged terrain and lush cloud forests, before arriving at the awe-inspiring site of Machu Picchu. She explored the intricate stone terraces, towering temples, and mysterious ruins, marveling at the ingenuity and craftsmanship of the ancient Incan civilization. But it was the breathtaking panoramic views of the surrounding mountains and valleys that captured Petra's heart. Here, amidst the timeless beauty of the Andes, she found a sense of peace and tranquility that lingered long after her departure."
  },
  {
      name: "Dubrovnik",
      country: "Croatia",
      date: "July 5, 2012",
      description: "Petra journeyed to the historic city of Dubrovnik, Croatia, on July 5, 2012. She was immediately captivated by the city's stunning beauty, medieval architecture, and azure waters. Petra explored the ancient walls of Dubrovnik's Old Town, strolling along the ramparts and taking in panoramic views of the Adriatic Sea. She wandered through narrow cobblestone streets lined with charming cafes, boutique shops, and centuries-old buildings. Petra ventured into the nearby islands, where she soaked up the sun on secluded beaches and sailed along the scenic coastline. But it was the magical atmosphere of Dubrovnik's Old Town at sunset that captured Petra's heart. Here, amidst the golden light and sea breeze, she found a sense of serenity and wonder that lingered long after her departure."
  },
  {
      name: "Hanoi",
      country: "Vietnam",
      date: "February 12, 2006",
      description: "Petra ventured to the bustling city of Hanoi, Vietnam, on February 12, 2006. She was immediately immersed in the city's vibrant street life, bustling markets, and rich cultural heritage. Petra explored the historic Old Quarter, with its labyrinthine streets filled with temples, pagodas, and colonial-era buildings. She sampled the diverse flavors of Vietnamese cuisine, from fragrant pho and crispy banh mi to savory bun cha and refreshing ca phe sua da. Petra ventured into the tranquil beauty of Hoan Kiem Lake, where she watched the sunset over the iconic red bridge and temple. But it was the warmth and hospitality of the Vietnamese people that captured Petra's heart. Here, amidst the hustle and bustle of the city, she found a sense of connection and camaraderie that left a lasting impression."
  },
  {
      name: "Kyoto",
      country: "Japan",
      date: "May 29, 1990",
      description: "Petra returned to the historic city of Kyoto, Japan, on May 29, 1990. She was eager to revisit the city's rich cultural heritage, ancient temples, and serene gardens. Petra retraced her steps through iconic landmarks such as the Fushimi Inari Shrine, the Kinkaku-ji Temple, and the Arashiyama Bamboo Grove. She indulged in traditional Japanese cuisine, savoring the flavors of sushi, tempura, and matcha. Petra also explored the tranquil beauty of the Philosopher's Path, a scenic walkway lined with cherry blossoms and historic landmarks. But it was the timeless charm of Kyoto's Gion district that captured Petra's heart. Here, amidst the historic tea houses and geisha performances, she found a sense of enchantment and wonder that lingered long after her departure."
  },
  {
      name: "Barcelona",
      country: "Spain",
      date: "October 7, 2011",
      description: "Petra ventured to the vibrant city of Barcelona, Spain, on October 7, 2011. She was immediately captivated by the city's unique blend of modernity and tradition, with its stunning architecture, bustling markets, and lively street life. Petra explored iconic landmarks such as the Sagrada Familia, Park Güell, and the Gothic Quarter, each one a testament to Barcelona's rich cultural heritage. She indulged in delicious tapas and sangria at local tavernas, sampled fresh seafood at the bustling Boqueria Market, and soaked up the sun on the city's golden beaches. But it was the vibrant atmosphere of Barcelona's streets and plazas that captured Petra's heart. Here, amidst the lively crowds and colorful architecture, she found a sense of joy and energy that left a lasting impression."
  },    {
    name: "Lisbon",
    country: "Portugal",
    date: "March 3, 2007",
    description: "Petra ventured to the charming city of Lisbon, Portugal, on March 3, 2007. She was immediately captivated by the city's colorful streets, historic landmarks, and vibrant culture. Petra explored iconic sites such as the Belem Tower, Jeronimos Monastery, and Sao Jorge Castle, each one a testament to Lisbon's rich maritime history. She wandered through the narrow alleyways of the Alfama district, listening to the soulful strains of Fado music and sampling delicious pastries at local cafes. Petra also ventured across the Tagus River to the picturesque town of Sintra, where she marveled at fairytale castles and lush gardens. But it was the warmth and hospitality of the Portuguese people that captured Petra's heart. Here, amidst the lively cafes and bustling markets, she found a sense of joy and camaraderie that left a lasting impression."
},
{
    name: "Stockholm",
    country: "Sweden",
    date: "June 15, 2017",
    description: "Petra journeyed to the enchanting city of Stockholm, Sweden, on June 15, 2017. She was immediately captivated by the city's stunning archipelago, historic landmarks, and vibrant culture. Petra explored iconic sites such as the Royal Palace, Vasa Museum, and Gamla Stan, the charming Old Town. She wandered through the picturesque streets lined with colorful buildings, boutique shops, and cozy cafes. Petra also ventured to the peaceful island of Djurgarden, where she strolled through lush parks and visited cultural attractions. But it was the tranquility of Stockholm's waterfront promenades that captured Petra's heart. Here, amidst the sparkling waters and scenic vistas, she found a sense of peace and serenity that lingered long after her departure."
},
{
    name: "Edinburgh",
    country: "Scotland",
    date: "August 22, 2014",
    description: "Petra embarked on a journey to the historic city of Edinburgh, Scotland, on August 22, 2014. She was immediately captivated by the city's medieval architecture, stunning landscapes, and rich history. Petra explored iconic sites such as Edinburgh Castle, the Royal Mile, and Holyrood Palace, each one steeped in centuries of tradition and legend. She wandered through the narrow closes and wynds of the Old Town, listening to tales of ghosts and legends from local storytellers. Petra also ventured to the picturesque Arthur's Seat, where she hiked to the summit for panoramic views of the city and beyond. But it was the warmth and hospitality of the Scottish people that captured Petra's heart. Here, amidst the cozy pubs and lively ceilidhs, she found a sense of kinship and camaraderie that left a lasting impression."
},
{
    name: "Budapest",
    country: "Hungary",
    date: "April 10, 2009",
    description: "Petra ventured to the historic city of Budapest, Hungary, on April 10, 2009. She was immediately captivated by the city's stunning architecture, rich culture, and thermal baths. Petra explored iconic sites such as the Buda Castle, Fisherman's Bastion, and the Hungarian Parliament Building, each one a testament to Budapest's storied past. She wandered through the charming streets of the Jewish Quarter, sampling traditional Hungarian cuisine and soaking up the vibrant atmosphere. Petra also indulged in the healing waters of the city's famous thermal baths, where she relaxed and rejuvenated her body and mind. But it was the enchanting beauty of the Danube River that captured Petra's heart. Here, amidst the iconic bridges and scenic vistas, she found a sense of peace and serenity that lingered long after her departure."
},
{
    name: "Dublin",
    country: "Ireland",
    date: "May 5, 2018",
    description: "Petra journeyed to the lively city of Dublin, Ireland, on May 5, 2018. She was immediately captivated by the city's vibrant culture, friendly locals, and rich history. Petra explored iconic sites such as Trinity College, Dublin Castle, and St. Patrick's Cathedral, each one steeped in centuries of tradition and lore. She wandered through the lively streets of Temple Bar, listening to traditional Irish music and sampling hearty pub fare. Petra also ventured to the picturesque countryside, where she visited ancient castles, serene lakes, and rugged coastlines. But it was the warmth and hospitality of the Irish people that captured Petra's heart. Here, amidst the cozy pubs and lively conversations, she found a sense of belonging and camaraderie that left a lasting impression."
},
{
    name: "Seoul",
    country: "South Korea",
    date: "October 30, 2011",
    description: "Petra ventured to the bustling city of Seoul, South Korea, on October 30, 2011. She was immediately captivated by the city's modern skyline, vibrant street life, and rich cultural heritage. Petra explored iconic sites such as Gyeongbokgung Palace, N Seoul Tower, and the bustling markets of Myeongdong and Namdaemun. She wandered through the historic Bukchon Hanok Village, where traditional Korean houses line narrow alleyways. Petra also indulged in delicious Korean cuisine, sampling spicy kimchi, savory bulgogi, and crispy fried chicken. But it was the warmth and hospitality of the Korean people that captured Petra's heart. Here, amidst the bustling streets and lively festivals, she found a sense of warmth and camaraderie that left a lasting impression."
}
      // Add more countries as needed
  ];
}
