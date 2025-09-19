export const routes = [
    { 
        id: 1, 
        route: '/animals', 
        linkName: 'Наши подопечные', 
        titlePage: 'Наши подопечные', 
        descr: 
            <>
                Питомцы, <br />
                у которых пока <br />
                нет своего <br />
                человека <br />
            </>
    },
    { 
        id: 2, 
        route: '/about-us', 
        linkName: 'О нас', 
        titlePage: 'О Vetland Adoption',
        descr: <></>
    },
    { 
        id: 3, 
        route: '/happy-stories', 
        linkName: 'Уже дома', 
        titlePage: 'Уже дома: истории собак и кошек, которым мы нашли постоянный дом',
        descr: <></>
    },
    { 
        id: 4, 
        route: '/help-us', 
        linkName: 'Поддержите нас', 
        titlePage: 'Финансовая поддержка',
        descr: 
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    maxWidth: '500px',
                }}
            >
                <span
                    style={{
                        fontWeight: '600',
                        fontSize: '18px',
                        lineHeight: '1.2',
                        letterSpacing: '-0.02em',
                        color: '#282828',
                        marginBottom: '1.5rem'
                    }}
                >
                    Мы ценим ваше участие и помощь. <br/>
                    Любая сумма важна и помогает нам работать, а нашим подопечным — жить и дождаться хозяина.
                </span>
                <span
                    style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        lineHeight: '1.2',
                        letterSpacing: '-0.02em',
                        color: '#FD0558',
                    }}
                >
                    Спасибо!
                </span>
            </div>
    },
    { 
        id: 5, 
        route: '/how-take-home', 
        linkName: 'Как забрать домой?', 
        titlePage: 'Как забрать домой?',
        descr: <></>
    },
    {
        id: 6,
        route: '/animal-info',
        linkName: '',
        titlePage: '',
        descr: <></>
    }
]