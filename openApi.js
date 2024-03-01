let retryCount = 0
let $taskInput = document.querySelector('.search-data');

$taskInput.addEventListener('keypress', (event) => {
	if(event.key == 'Enter'){
		event.preventDefault(); // 폼 제출 방지
		addTask();//enter 키를 눌렸을 때 실행할 동작
	}
})

const addTask = async () => {
	if($searchData.value === '') {
		alert('음악을 입력해 주세요.')
		return;
	} else {
		$searchResult.classList.add('on');
		$wrap.style.overflowY = 'auto';
		$searchInfo.style.display = ('none');
		$searchWrap.classList.add('search-value');

        const message = $searchData.value;
        try {
            const response = await fetch(`https://port-0-openai-node-dc9c2nlt8u9zyk.sel5.cloudtype.app/${message}`);
            const data = await response.json();
            console.log(data);

            const hasUndefinedData = data.some(item => item.title === undefined || item.singer === undefined);

            if (hasUndefinedData && retryCount < 3) {
                console.log('Data contains undefined values. Retrying fetch...');
                retryCount++;
                await addTask();  // 재귀적으로 addTask를 호출하여 재시도
            } else if (hasUndefinedData && retryCount >= 3) {
                console.error('Maximum retry limit reached. Failed to fetch data with complete values.');
            } else {    
                for (let i = 0; i < 10; i++) {
                    console.log(`title[${i}]`, data[i].title);
                    console.log(`singer[${i}]`, data[i].singer);
                }
            }
            } catch (error) {
                console.error('Error:', error);
        }
	}
}