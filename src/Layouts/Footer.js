import React from 'react';
import '../index.css';

class Footer extends React.Component{
    render(){
        return (
            <div className="app-footer">
                          <div className="partners lato-black-granite-gray-18px">
                        PARTNERS
                      </div>
                      <div className="text-14 spoqahansansneo-bold-mine-shaft-32px">
                        믿을 수 있는 파트너와 <br />
                        함께하는 블루웨일팀
                      </div>
                      <img
                        className="logos-1"
                        src="https://cdn.animaapp.com/projects/61e8ac41a0bdd8ea4045e986/releases/61e8ae8d1b80f3096e13ab93/img/logos-1@3x.png"
                      />
                      <div className="overlap-group14">
                        <Rectangle1 className="rectangle-83" />
                        <div className="text-16 spoqahansansneo-bold-white-16px">
                          찾아오시는 길
                        </div>
                        <div className="place spoqahansansneo-bold-white-16px">
                          Contact
                        </div>
                        <p className="text-17 spoqahansansneo-regular-normal-white-16px">
                          서울특별시 종로구 청계천로 85 삼일빌딩 9층
                        </p>
                        <div className="supportlugstaycom spoqahansansneo-regular-normal-white-16px">
                          support@lugstay.com
                        </div>
                        <img
                          className="line-11"
                          src="https://cdn.animaapp.com/projects/61e8ac41a0bdd8ea4045e986/releases/61e8ae8d1b80f3096e13ab93/img/line-11@2x.svg"
                        />
                        <img
                          className="line-12"
                          src="https://cdn.animaapp.com/projects/61e8ac41a0bdd8ea4045e986/releases/61e8ae8d1b80f3096e13ab93/img/line-11@2x.svg"
                        />
                        <div className="text-18 spoqahansansneo-bold-white-32px">
                          블루웨일팀과 더 많은
                          <br />
                          이야기를 나눠보세요
                        </div>
                        <div className="overlap-group border-1-5px-white">
                          <div className="text-19 notosanskr-bold-white-17px">
                            회사소개서 받아보기
                          </div>
                        </div>
                        <div className="overlap-group1">
                          <div className="text notosanskr-bold-white-17px">
                            제휴/협업 문의
                          </div>
                        </div>
                        <img
                          className="group-2"
                          src="https://cdn.animaapp.com/projects/61e8ac41a0bdd8ea4045e986/releases/61edfc5d0b6c58ec22ee4462/img/group@1x.png"
                        />
                        <img
                          className="mask-group-3"
                          src="https://cdn.animaapp.com/projects/61e8ac41a0bdd8ea4045e986/releases/61e8ae8d1b80f3096e13ab93/img/mask-group@1x.svg"
                        />
                        <Rectangle1 className="rectangle-187" />
                        <div className="overlap-group9">
                          <div className="text-36">
                            공간 등록 문의
                          </div>
                        </div>
                        <div className="text-37">
                          유휴공간이 있으신가요?
                          <br />
                          공간을 제공하고 추가 수익을 얻어보세요
                        </div>
                        <img
                          className="image-17"
                          src="https://cdn.animaapp.com/projects/61e8ac41a0bdd8ea4045e986/releases/61e8ae8d1b80f3096e13ab93/img/image-17@1x.png"
                        />
                      </div>
                      <img
                        className="image-8"
                        src="https://cdn.animaapp.com/projects/61e8ac41a0bdd8ea4045e986/releases/61e8ae8d1b80f3096e13ab93/img/image-8@1x.png"
                      />
            </div>
        )
    }
}

class Rectangle1 extends React.Component {
    render() {
        const { className } = this.props;

        return <div className={`rectangle-1 ${className || ""}`}></div>;
    }
}
     
export default Footer;