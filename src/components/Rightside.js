import React from 'react'

import styled from 'styled-components';

const Rightside = () => {
    return (
        <Container>
        <FollowCard>
            <Title>
                <h2>
                    Add to your feed
                </h2>
                <img src="/assets/images/feed-icon.svg" />
            </Title>
            
            <FeedList>
                <li>
                <a>
                    <Avatar />
                </a>
                <div>
                <span>#Linkedin</span>
                <button>Follows</button>
                </div>
                </li>

                <li>
                <a>
                    <Avatar />
                </a>
                <div>
                <span>#Videos</span>
                <button>Follows</button>
                </div>
                </li>
            </FeedList>
            <Recommendation>
                View all Recommendation
            
            <img src = "/assets/images/right-icon.svg" alt = "" />
            </Recommendation>
            </FollowCard>
            <BannerCard>
                <img src= "https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs" alt = ""/>
            </BannerCard>
        </Container>
    )
}

const Container = styled.div`
    grid-area: rightside;
`;
const FollowCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;

    padding:16px;
    box-shadow:0 0 0 1px rgba(0 0 0 / 15%) 0 0 0 1px rgba(0 0 0 / 20%);
`;
const Title = styled.div`
    display:inline-flex;
    align-items:center;
    justify-content: space-between;
    font-size:15px;
    width:100%;
    color:rgba(0,0,0,0.6);
`;
const FeedList = styled.ul`
    margin-top: 16px;
    li {
        display:flex;
        align-items:center;
        margin: 12px 0;
        position: relative;
        font-size:12px;
        & > div{
            display:flex;
            flex-direction: column;
        }
        button {
            background-color: transparent;
            color:rgba(0,0,0,0.6);
            box-shadow: inset 0 0 0 1px rgba(0,0,0,0.6);
            padding:16px;
            align-items: center;
            box-sizing: border-box;
            font-weight: 600;
            display: inline-flex;
            justify-content: center;
            max-height:32px;
            max-width: 480px;
            text-align: center;
            outline:none;
            border-radius: 50px;
        }
    }
`;
const Avatar = styled.div`
    background-image: url('https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width:48px;
    height:48px;
    margin-right:8px;
`;

const Recommendation = styled.a`
    color:#0a66c2;
    display:flex;
    align-items:center;
    font-size:16px;

`;
const BannerCard = styled(FollowCard)`
    img {
        width:100%;
        height:100%
    }
`;
export default Rightside;
