export interface AdministrativeDivision {
  name: string;
  subdivisions?: AdministrativeDivision[];
}

export const administrativeDivisions: AdministrativeDivision[] = [
  {
    name: "서울특별시",
    subdivisions: [
      {
        name: "강남구",
        subdivisions: [
          { name: "개포동" }, { name: "논현동" }, { name: "대치동" }, { name: "도곡동" },
          { name: "삼성동" }, { name: "세곡동" }, { name: "수서동" }, { name: "신사동" },
          { name: "압구정동" }, { name: "역삼동" }, { name: "청담동" }
        ]
      },
      {
        name: "강동구",
        subdivisions: [
          { name: "강일동" }, { name: "고덕동" }, { name: "길동" }, { name: "둔촌동" },
          { name: "명일동" }, { name: "상일동" }, { name: "성내동" }, { name: "암사동" },
          { name: "천호동" }
        ]
      },
      {
        name: "강북구",
        subdivisions: [
          { name: "미아동" }, { name: "번동" }, { name: "수유동" }, { name: "우이동" }
        ]
      },
      {
        name: "강서구",
        subdivisions: [
          { name: "가양동" }, { name: "공항동" }, { name: "등촌동" }, { name: "마곡동" },
          { name: "방화동" }, { name: "염창동" }, { name: "화곡동" }
        ]
      },
      {
        name: "관악구",
        subdivisions: [
          { name: "남현동" }, { name: "봉천동" }, { name: "신림동" }
        ]
      },
      {
        name: "광진구",
        subdivisions: [
          { name: "광장동" }, { name: "구의동" }, { name: "군자동" }, { name: "능동" },
          { name: "자양동" }, { name: "중곡동" }, { name: "화양동" }
        ]
      },
      {
        name: "구로구",
        subdivisions: [
          { name: "가리봉동" }, { name: "개봉동" }, { name: "고척동" }, { name: "구로동" },
          { name: "궁동" }, { name: "신도림동" }, { name: "오류동" }, { name: "천왕동" },
          { name: "항동" }
        ]
      },
      {
        name: "금천구",
        subdivisions: [
          { name: "가산동" }, { name: "독산동" }, { name: "시흥동" }
        ]
      },
      {
        name: "노원구",
        subdivisions: [
          { name: "공릉동" }, { name: "상계동" }, { name: "월계동" }, { name: "중계동" },
          { name: "하계동" }
        ]
      },
      {
        name: "도봉구",
        subdivisions: [
          { name: "도봉동" }, { name: "방학동" }, { name: "쌍문동" }, { name: "창동" }
        ]
      },
      {
        name: "동대문구",
        subdivisions: [
          { name: "답십리동" }, { name: "신설동" }, { name: "용두동" }, { name: "이문동" },
          { name: "장안동" }, { name: "전농동" }, { name: "제기동" }, { name: "청량리동" },
          { name: "회기동" }, { name: "휘경동" }
        ]
      },
      {
        name: "동작구",
        subdivisions: [
          { name: "노량진동" }, { name: "대방동" }, { name: "동작동" }, { name: "본동" },
          { name: "사당동" }, { name: "상도동" }, { name: "신대방동" }, { name: "흑석동" }
        ]
      },
      {
        name: "마포구",
        subdivisions: [
          { name: "공덕동" }, { name: "대흥동" }, { name: "도화동" }, { name: "마포동" },
          { name: "상암동" }, { name: "서교동" }, { name: "성산동" }, { name: "아현동" },
          { name: "염리동" }, { name: "용강동" }, { name: "합정동" }
        ]
      },
      {
        name: "서대문구",
        subdivisions: [
          { name: "남가좌동" }, { name: "냉천동" }, { name: "대현동" }, { name: "북가좌동" },
          { name: "신촌동" }, { name: "연희동" }, { name: "영천동" }, { name: "홍은동" },
          { name: "홍제동" }
        ]
      },
      {
        name: "서초구",
        subdivisions: [
          { name: "내곡동" }, { name: "반포동" }, { name: "방배동" }, { name: "서초동" },
          { name: "양재동" }, { name: "염곡동" }, { name: "우면동" }, { name: "원지동" },
          { name: "잠원동" }
        ]
      },
      {
        name: "성동구",
        subdivisions: [
          { name: "금호동" }, { name: "마장동" }, { name: "성수동" }, { name: "옥수동" },
          { name: "왕십리동" }, { name: "용답동" }, { name: "응봉동" }, { name: "행당동" }
        ]
      },
      {
        name: "성북구",
        subdivisions: [
          { name: "길음동" }, { name: "돈암동" }, { name: "동선동" }, { name: "보문동" },
          { name: "삼선동" }, { name: "상월곡동" }, { name: "석관동" }, { name: "성북동" },
          { name: "안암동" }, { name: "정릉동" }, { name: "종암동" }, { name: "하월곡동" }
        ]
      },
      {
        name: "송파구",
        subdivisions: [
          { name: "가락동" }, { name: "거여동" }, { name: "마천동" }, { name: "문정동" },
          { name: "방이동" }, { name: "삼전동" }, { name: "석촌동" }, { name: "송파동" },
          { name: "잠실동" }, { name: "장지동" }, { name: "풍납동" }
        ]
      },
      {
        name: "양천구",
        subdivisions: [
          { name: "목동" }, { name: "신월동" }, { name: "신정동" }
        ]
      },
      {
        name: "영등포구",
        subdivisions: [
          { name: "당산동" }, { name: "대림동" }, { name: "도림동" }, { name: "문래동" },
          { name: "신길동" }, { name: "양평동" }, { name: "여의도동" }, { name: "영등포동" }
        ]
      },
      {
        name: "용산구",
        subdivisions: [
          { name: "갈월동" }, { name: "남영동" }, { name: "도원동" }, { name: "동빙고동" },
          { name: "동자동" }, { name: "문배동" }, { name: "보광동" }, { name: "산천동" },
          { name: "서빙고동" }, { name: "신계동" }, { name: "용문동" }, { name: "용산동" },
          { name: "원효로" }, { name: "이촌동" }, { name: "이태원동" }, { name: "청파동" },
          { name: "한강로" }, { name: "한남동" }, { name: "효창동" }, { name: "후암동" }
        ]
      },
      {
        name: "은평구",
        subdivisions: [
          { name: "갈현동" }, { name: "구산동" }, { name: "녹번동" }, { name: "대조동" },
          { name: "불광동" }, { name: "수색동" }, { name: "신사동" }, { name: "역촌동" },
          { name: "응암동" }, { name: "증산동" }, { name: "진관동" }
        ]
      },
      {
        name: "종로구",
        subdivisions: [
          { name: "가회동" }, { name: "견지동" }, { name: "경운동" }, { name: "계동" },
          { name: "공평동" }, { name: "관수동" }, { name: "관철동" }, { name: "관훈동" },
          { name: "교남동" }, { name: "교북동" }, { name: "구기동" }, { name: "궁정동" },
          { name: "내수동" }, { name: "내자동" }, { name: "누상동" }, { name: "누하동" },
          { name: "당주동" }, { name: "도렴동" }, { name: "동숭동" }, { name: "명륜1가" },
          { name: "묘동" }, { name: "무악동" }, { name: "봉익동" }, { name: "부암동" },
          { name: "사간동" }, { name: "사직동" }, { name: "삼청동" }, { name: "서린동" },
          { name: "세종로" }, { name: "소격동" }, { name: "송월동" }, { name: "송현동" },
          { name: "수송동" }, { name: "숭인동" }, { name: "신교동" }, { name: "신문로1가" },
          { name: "신영동" }, { name: "안국동" }, { name: "연건동" }, { name: "연지동" },
          { name: "예지동" }, { name: "옥인동" }, { name: "와룡동" }, { name: "운니동" },
          { name: "원남동" }, { name: "원서동" }, { name: "이화동" }, { name: "익선동" },
          { name: "인사동" }, { name: "인의동" }, { name: "장사동" }, { name: "재동" },
          { name: "적선동" }, { name: "종로1가" }, { name: "중학동" }, { name: "창성동" },
          { name: "창신동" }, { name: "청운동" }, { name: "청진동" }, { name: "체부동" },
          { name: "충신동" }, { name: "통의동" }, { name: "통인동" }, { name: "팔판동" },
          { name: "평동" }, { name: "평창동" }, { name: "필운동" }, { name: "행촌동" },
          { name: "혜화동" }, { name: "홍지동" }, { name: "화동" }, { name: "효자동" },
          { name: "효제동" }, { name: "훈정동" }
        ]
      },
      {
        name: "중구",
        subdivisions: [
          { name: "광희동" }, { name: "남대문로" }, { name: "남산동" }, { name: "명동" },
          { name: "무교동" }, { name: "을지로" }, { name: "장충동" }, { name: "충무로" },
          { name: "회현동" }
        ]
      },
      {
        name: "중랑구",
        subdivisions: [
          { name: "망우동" }, { name: "면목동" }, { name: "묵동" }, { name: "상봉동" },
          { name: "신내동" }, { name: "중화동" }
        ]
      }
    ]
  },
  {
    name: "경기도",
    subdivisions: [
      {
        name: "수원시",
        subdivisions: [
          { name: "장안구" }, { name: "권선구" }, { name: "팔달구" }, { name: "영통구" }
        ]
      },
      {
        name: "성남시",
        subdivisions: [
          { name: "수정구" }, { name: "중원구" }, { name: "분당구" }
        ]
      },
      {
        name: "고양시",
        subdivisions: [
          { name: "덕양구" }, { name: "일산동구" }, { name: "일산서구" }
        ]
      },
      {
        name: "용인시",
        subdivisions: [
          { name: "처인구" }, { name: "기흥구" }, { name: "수지구" }
        ]
      },
      { name: "안양시", subdivisions: [{ name: "만안구" }, { name: "동안구" }] },
      { name: "안산시", subdivisions: [{ name: "상록구" }, { name: "단원구" }] },
      { name: "화성시" }, { name: "평택시" }, { name: "의정부시" }, { name: "파주시" },
      { name: "김포시" }, { name: "광주시" }, { name: "광명시" }, { name: "군포시" },
      { name: "하남시" }, { name: "오산시" }, { name: "이천시" }, { name: "안성시" },
      { name: "구리시" }, { name: "남양주시" }, { name: "시흥시" }, { name: "부천시" },
      { name: "동두천시" }, { name: "과천시" }, { name: "양주시" }, { name: "포천시" },
      { name: "여주시" }, { name: "연천군" }, { name: "가평군" }, { name: "양평군" }
    ]
  },
  {
    name: "부산광역시",
    subdivisions: [
      { name: "강서구" }, { name: "금정구" }, { name: "남구" }, { name: "동구" },
      { name: "동래구" }, { name: "부산진구" }, { name: "북구" }, { name: "사상구" },
      { name: "사하구" }, { name: "서구" }, { name: "수영구" }, { name: "연제구" },
      { name: "영도구" }, { name: "중구" }, { name: "해운대구" }, { name: "기장군" }
    ]
  },
  {
    name: "대구광역시",
    subdivisions: [
      { name: "남구" }, { name: "달서구" }, { name: "동구" }, { name: "북구" },
      { name: "서구" }, { name: "수성구" }, { name: "중구" }, { name: "달성군" },
      { name: "군위군" }
    ]
  },
  {
    name: "인천광역시",
    subdivisions: [
      { name: "계양구" }, { name: "미추홀구" }, { name: "남동구" }, { name: "동구" },
      { name: "부평구" }, { name: "서구" }, { name: "연수구" }, { name: "중구" },
      { name: "강화군" }, { name: "옹진군" }
    ]
  },
  {
    name: "광주광역시",
    subdivisions: [
      { name: "광산구" }, { name: "남구" }, { name: "동구" }, { name: "북구" },
      { name: "서구" }
    ]
  },
  {
    name: "대전광역시",
    subdivisions: [
      { name: "대덕구" }, { name: "동구" }, { name: "서구" }, { name: "유성구" },
      { name: "중구" }
    ]
  },
  {
    name: "울산광역시",
    subdivisions: [
      { name: "남구" }, { name: "동구" }, { name: "북구" }, { name: "중구" },
      { name: "울주군" }
    ]
  },
  {
    name: "세종특별자치시",
    subdivisions: [
      { name: "조치원읍" }, { name: "연기면" }, { name: "연동면" }, { name: "부강면" },
      { name: "금남면" }, { name: "장군면" }, { name: "연서면" }, { name: "전의면" },
      { name: "전동면" }, { name: "소정면" }, { name: "한솔동" }, { name: "새롬동" },
      { name: "도담동" }, { name: "아름동" }, { name: "종촌동" }, { name: "고운동" },
      { name: "보람동" }, { name: "대평동" }, { name: "소담동" }, { name: "반곡동" }
    ]
  },
  {
    name: "강원특별자치도",
    subdivisions: [
      { name: "춘천시" }, { name: "원주시" }, { name: "강릉시" }, { name: "동해시" },
      { name: "태백시" }, { name: "속초시" }, { name: "삼척시" }, { name: "홍천군" },
      { name: "횡성군" }, { name: "영월군" }, { name: "평창군" }, { name: "정선군" },
      { name: "철원군" }, { name: "화천군" }, { name: "양구군" }, { name: "인제군" },
      { name: "고성군" }, { name: "양양군" }
    ]
  },
  {
    name: "충청북도",
    subdivisions: [
      { name: "청주시", subdivisions: [{ name: "상당구" }, { name: "서원구" }, { name: "흥덕구" }, { name: "청원구" }] },
      { name: "충주시" }, { name: "제천시" }, { name: "보은군" }, { name: "옥천군" },
      { name: "영동군" }, { name: "증평군" }, { name: "진천군" }, { name: "괴산군" },
      { name: "음성군" }, { name: "단양군" }
    ]
  },
  {
    name: "충청남도",
    subdivisions: [
      { name: "천안시", subdivisions: [{ name: "동남구" }, { name: "서북구" }] },
      { name: "공주시" }, { name: "보령시" }, { name: "아산시" }, { name: "서산시" },
      { name: "논산시" }, { name: "계룡시" }, { name: "당진시" }, { name: "금산군" },
      { name: "부여군" }, { name: "서천군" }, { name: "청양군" }, { name: "홍성군" },
      { name: "예산군" }, { name: "태안군" }
    ]
  },
  {
    name: "전라북도",
    subdivisions: [
      { name: "전주시", subdivisions: [{ name: "완산구" }, { name: "덕진구" }] },
      { name: "군산시" }, { name: "익산시" }, { name: "정읍시" }, { name: "남원시" },
      { name: "김제시" }, { name: "완주군" }, { name: "진안군" }, { name: "무주군" },
      { name: "장수군" }, { name: "임실군" }, { name: "순창군" }, { name: "고창군" },
      { name: "부안군" }
    ]
  },
  {
    name: "전라남도",
    subdivisions: [
      { name: "목포시" }, { name: "여수시" }, { name: "순천시" }, { name: "나주시" },
      { name: "광양시" }, { name: "담양군" }, { name: "곡성군" }, { name: "구례군" },
      { name: "고흥군" }, { name: "보성군" }, { name: "화순군" }, { name: "장흥군" },
      { name: "강진군" }, { name: "해남군" }, { name: "영암군" }, { name: "무안군" },
      { name: "함평군" }, { name: "영광군" }, { name: "장성군" }, { name: "완도군" },
      { name: "진도군" }, { name: "신안군" }
    ]
  },
  {
    name: "경상북도",
    subdivisions: [
      { name: "포항시", subdivisions: [{ name: "남구" }, { name: "북구" }] },
      { name: "경주시" }, { name: "김천시" }, { name: "안동시" }, { name: "구미시" },
      { name: "영주시" }, { name: "영천시" }, { name: "상주시" }, { name: "문경시" },
      { name: "경산시" }, { name: "의성군" }, { name: "청송군" }, { name: "영양군" },
      { name: "영덕군" }, { name: "청도군" }, { name: "고령군" }, { name: "성주군" },
      { name: "칠곡군" }, { name: "예천군" }, { name: "봉화군" }, { name: "울진군" },
      { name: "울릉군" }
    ]
  },
  {
    name: "경상남도",
    subdivisions: [
      { name: "창원시", subdivisions: [{ name: "의창구" }, { name: "성산구" }, { name: "마산합포구" }, { name: "마산회원구" }, { name: "진해구" }] },
      { name: "진주시" }, { name: "통영시" }, { name: "사천시" }, { name: "김해시" },
      { name: "밀양시" }, { name: "거제시" }, { name: "양산시" }, { name: "의령군" },
      { name: "함안군" }, { name: "창녕군" }, { name: "고성군" }, { name: "남해군" },
      { name: "하동군" }, { name: "산청군" }, { name: "함양군" }, { name: "거창군" },
      { name: "합천군" }
    ]
  },
  {
    name: "제주특별자치도",
    subdivisions: [
      { name: "제주시" }, { name: "서귀포시" }
    ]
  }
];
