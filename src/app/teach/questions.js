

// some way to generate questions instead of typing them out?
const QArray = [
    { 
        questionText: '안녕하세요.',
        correctAnswer: 'Hello / Hello, how are you.',
        hints: [
            'I\'m doing well.',
            'Goodbye.'
        ]
    },
    {
        questionText: '사랑해 / 사랑해요 / 사랑합니다 ; 난 널 사랑해 \
        ',
        correctAnswer: 'I love you ; I want you \
        ',
        hints: [
            '하다 is the verb to do, perform, make, wear'
        ]
    },

    {
        questionText: '사랑을 해줘요 ; 해줘요 ; 내게 해줘 ; \
        내게 다정하게 해 줘',
        correctAnswer: 'give love ; do it ; do it for me ; be kind to me',
        hints: [
            '해줘 makes the phrase imperative ; 주다 is the verb to give, \
            inflict, unwind further'
        ]
    },

    {
        questionText: '나는 당신 그대로를 좋아합니다',
        correctAnswer: 'I love you for you / I like you the way you are',
        hints: [
            {},
            {}
        ]
    },

    {
        questionText: 
        '보고 싶은 생각에 \
        들어간 우리 창에 \
        나는 말을 거는데 \
        보내지는 않을래 \
        느린 한마디보다 \
        조용함이 더 좋아 \
        기다리고 있지만 \
        매일 이런 건 아냐',
        correctAnswer: 
        '보고 싶은 생각에 \
        들어간 우리 창에 \
        나는 말을 거는데 \
        보내지는 않을래 \
        느린 한마디보다 \
        조용함이 더 좋아 \
        기다리고 있지만 \
        매일 이런 건 아냐',
        hints: [

        ]
    }
    // another 'i love you'? found many on naver

    /*
    { 
        questionText: 'translate... or picture',
        answerOptions: [
            {answerText: 'something korean', isCorrect: true},
            {answerText: 'something korean', isCorrect: false},
            {answerText: 'something korean', isCorrect: false}
        ]
    },
    {
        questionText: 'translate or picture short answer',
        answerOptions: 
    }
    */
];

export default QArray;