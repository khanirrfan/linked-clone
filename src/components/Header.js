import React from 'react';
import styled from 'styled-components';
const Header = () => {
    return (
        <Container>
            <Content>
                <Logo >
                    <a href="/home">
                        <img src="/assets/images/home-logo.svg" alt="" />
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input placeholder="Search" type="text" />
                    </div>
                    <SearchIcon>
                        <img src="/assets/images/search-icon.svg" />
                    </SearchIcon>
                </Search>
                <Nav>
                    <NavListWrap>
                        <NavList className="active">
                            <a>
                                <img src="/assets/images/nav-home.svg" alt=""></img>
                                <span>Home</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="/assets/images/nav-network.svg" alt=""></img>
                                <span>My Network</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="/assets/images/nav-jobs.svg" alt=""></img>
                                <span>Jobs</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="/assets/images/nav-messaging.svg" alt=""></img>
                                <span>Messaging</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="/assets/images/nav-notifications.svg" alt=""></img>
                                <span>Notifications</span>
                            </a>
                        </NavList>
                        <User>
                            <a>
                                <img src="/assets/images/user.svg"></img>
                                <span>Me <img src="/assets/images/down-icon.svg" alt=""/></span>
                                
                            </a>
                            <UserDropdownWrap>
                                <UserNavList>
                                <a>User Content 1</a>
                                </UserNavList>
                                <UserNavList>
                                <a>User Content 1</a>
                                </UserNavList>
                                <UserNavList>
                                <a>User Content 1</a>
                                </UserNavList>
                            </UserDropdownWrap>
                        </User>
                        <Work>
                        <a>
                            <img src="/assets/images/nav-work.svg" alt=""></img>
                            <span>work
                            <img src="/assets/images/down-icon.svg" alt =""/>
                            </span>
                        </a>
                        </Work>
                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    background-color: #fff;
    border-radius: 1px solid rgba(0,0,0,0.88);
    left:0;
    padding:0 2px;
    top:0%;
    width:100vw;
    z-index: 100;

`;

const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1520px;
`;

const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;
`;
const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;

    &>div {
        max-width: 200px;
        input {
            border:none;
            box-shadow: none;
            background-color: #eef3f8;
            border-radius: 2px;
            color:rgba(0,0,0,0.9);
            width:210px;
            padding:0 8px 0 40px;
            line-height: 1.75px;
            font-weight: 400;
            font-size: 14px;
            height: 34px;
            border-color: #dce6f1;
            vertical-align: text-top;
        }
    }
`;

const SearchIcon = styled.div`
    width:40px;
    position: absolute;
    z-index: 1;
    top:10px;
    left: 2px;
    border-radius: 0 2px 2px 0;
    margin: 0;
    pointer-events:none;
    display: flex;
    justify-content: center;
    align-items: center;
    /* transition: background-color: ; */
`;
const Nav = styled.nav`
    margin-left: auto;
    display: block;

    @media(max-width:768px){
        position: fixed;
        left:0;
        bottom: 0;
        background: white;
        width: 100%;
        z-index:100;
    }
`;

const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;

    .active {
        span:after{
            content: '';
            transform: scaleX(1);
            border-bottom: 2px solid var(--white, #fff);
            bottom: 0;
            left:0;
            position: absolute;
            transition: transform(0.2s ease-in-out);
            width: 100%;
            border-color: rgba(0,0,0,0.9);

        }

    }
`;
const NavList = styled.li`
    display: flex;
    align-items: center;
    a {
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight:400;
        justify-content: center;
        line-height: 1.5;
        min-height: 52px;
        min-width: 80px;
        position: relative;
        text-decoration: none;
        cursor: pointer;
    span {
        color: rgba(0,0,0,0.6);
        display: flex;
        align-items: center;
    }

    @media(max-width:768px){
        min-width: 70px;
    }    
    }

    &:hover, &:active{
        a{
            span{
                color:rgba(0,0,0,0.9);
                /* color:red */
            }
        }
    }
`;
const UserDropdownWrap = styled.div`
    position: absolute;
    top:55px;
    background: white;
    border-radius: 0 0 5px 5px;
    transition-duration: 167ms;
    text-align: center;
    display:none;
`;
const User = styled(NavList)`

a > img {
    width:24px;
    height:24px;
    border-radius: 50%;
}
span {
    display:flex;
    align-items: center;

}

&:hover {
    ${UserDropdownWrap}{
        align-items: center;
        display:flex;
        justify-content: center;
    }
}
`;

const Work  = styled(User)`
    border-left: 1px solid rgba(0,0,0,0.09);
`

const UserNavList = styled.li`
    display: flex;
    align-items: center;

    a {
        display:flex;
        align-items: center;
        flex-direction:column;
        background: transparent;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight:400;
        justify-content: center;
        line-height: 1.5;
        min-height: 32px;
        min-width: 80px;
        position: relative;
        text-decoration: none;
        cursor: pointer;
    /* span {
        color: rgba(0,0,0,0.6);
        display: flex;
        align-items: center;
    } */

    /* @media(max-width:768px){
        min-width: 70px;
    }     */
    }

    &:hover, &:active{
        a{
            /* span{ */
                color:rgba(0,0,0,0.9);
                /* color:red */
                opacity: 0.5;
            /* } */
        }
    }
`;

export default Header
