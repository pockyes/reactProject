import React from 'react';
import './index.css';

class Header extends React.Component{
    render(){
      return (
        <div className="overlap-group12">
        <Group150 />
        <Rectangle1 />
        <div className="rectangle-87"></div>
        <div className="our-mission">
          OUR MISSION
        </div>
        <div className="text-5">
          <span className="span spoqahansansneo-bold-white-32px">
            유휴공간 중개를 통해
            <br />
          </span>
          <span className="span1">유통/물류 프로세스를 혁신 </span>
          <span className="span spoqahansansneo-bold-white-32px">합니다</span>
        </div>
        <div className="text-12">
          실시간 유휴 공간 중개 플랫폼
          <br />
          블루웨일컴퍼니
        </div>
        <div className="text-13">
          세상의 모든 유휴공간에 새로운 가치를 더하고
          <br />
          라이프스타일의 혁신을 만듭니다.
        </div>
        <img
          className="group-152"
          src="https://cdn.animaapp.com/projects/61e8ac41a0bdd8ea4045e986/releases/61e8ae8d1b80f3096e13ab93/img/group-152@2x.svg"
        />
        <div className="rectangle-90"></div>
        <div className="text-15 spoqahansansneo-bold-ronchi-18px">
          <span className="span0 spoqahansansneo-bold-ronchi-18px">
            고객에게 더 빠르게 배송해 보세요!
            <br />
          </span>
          <span className="span1-1">
            유휴공간을 통해 도심 거점 마이크로 물류 허브를 <br />
            구축하고 최적화된 물류 경험을 선사합니다!
          </span>
        </div>
        <img
          className="line-14"
          src="https://cdn.animaapp.com/projects/61e8ac41a0bdd8ea4045e986/releases/61e8ae8d1b80f3096e13ab93/img/line-14@2x.svg"
        />
        <div className="overlap-group8">
          <div className="text_label spoqahansansneo-regular-normal-gray-nurse-18px">
            <span className="span0 spoqahansansneo-regular-normal-gray-nurse-18px">
              옆 건물 사무실로 택배 보냈는데
              <br />
            </span>
            <span className="span1-2">왜 200Km 떨어진 옥X 터미널까지 가는거죠?</span>
          </div>
          <img
            className="line-13"
            src="https://cdn.animaapp.com/projects/61e8ac41a0bdd8ea4045e986/releases/61e8ae8d1b80f3096e13ab93/img/line-14@2x.svg"
          />
          <img
            className="group-308"
            src="https://cdn.animaapp.com/projects/61e8ac41a0bdd8ea4045e986/releases/61e8ae8d1b80f3096e13ab93/img/group-308@3x.png"
          />
        </div>
        <img
          className="vector"
          src="vector.svg"
        />
        <img
          className="group-321"
          src="https://cdn.animaapp.com/projects/61e8ac41a0bdd8ea4045e986/releases/61e8ae8d1b80f3096e13ab93/img/group-321@3x.png"
        />
        <img
          className="mask-group"
          src="https://cdn.animaapp.com/projects/61e8ac41a0bdd8ea4045e986/releases/61e8ae8d1b80f3096e13ab93/img/mask-group-2@1x.svg"
        />
        <img
          className="group-342"
          src="https://cdn.animaapp.com/projects/61e8ac41a0bdd8ea4045e986/releases/61e8ae8d1b80f3096e13ab93/img/group-342@3x.png"
        />

        <img
          className="group-1"
          src="https://cdn.animaapp.com/projects/61e8ac41a0bdd8ea4045e986/releases/61e917039c07effb99d6a9c1/img/group-1@2x.svg"
        />

        <div className="rectangle-201"></div>
      </div>
      )
    }
  }
      

  class Group150 extends React.Component {
    render() {
        return <div className="group-150"></div>;
    }
}

  class Rectangle1 extends React.Component {
      render() {
          const { className } = this.props;

          return <div className={`rectangle-1 ${className || ""}`}></div>;
      }
  }

  export default Header;

  