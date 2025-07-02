    /**
     * 지정된 주소로 Http 요청을 보내고 결과를 함수로 처리함
     * 
     * @param {string} addr - 요청을 보낼 URL (예: "posts, albums")
     * @param {"GET"|"POST"|"PUT"|"DELETE"|"PATCH"} method - HTTP 메소드 종류
     * @param {(responseText:string) => void} callback - 요청 성공 시 실행할 콜백 함수
     */


      function getData(addr, method, callback) {
        const url = `https://jsonplaceholder.typicode.com/${addr}`;
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.send();
        xhr.onload = function () {
          //   콜백함수 자리
          callcack(xhr.responseText);
          if (xhr.status === 200) {
          } else if (xhr.status === 404) {
            console.log("쿼리가 잘못되었습니다. 확인하세요.");
          } else if (xhra.status === 505) {
            console.log("서버가 오류입니다. 다시 시도해주세요.");
          }
        };
      }

      function postsParse(_data){}
      function albumsParse(_data){}
      function photosParse(_data){}
      function todosParse(_data){}

      getData("posts", "GET", postsParse);
      getData("albums", "GET", albumsParse);
      getData("photos", "GET", photosParse);
      getData("todos", "GET", todosParse);