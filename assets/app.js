const markets={
  russia:{title:'俄罗斯终端市场',big:'74.8%',caption:'2026 Q1 SUV份额',intro:'市场在2025年收缩后恢复增长，但本地化品牌正承接中国平台销量。进入重点已从配置与价格，转为功率税费、金融、售后和残值。',facts:[['主销价格','205–360万卢布','紧凑与主流中型SUV'],['动力红线','≤160马力','个人进口优惠关键线'],['主力车型','1.5L / 1.5T SUV','两驱走量，四驱做毛利'],['新能源','增程优于全国纯电','大城市、有服务能力再进入']]},
  suifenhe:{title:'绥芬河出口通道',big:'+112.3%',caption:'2025汽车出口同比',intro:'它不是独立消费市场，而是连接俄罗斯远东的集散、整备、检测、配件与售后支点。所有价格必须按俄方终端落地价倒推。',facts:[['首选规格','1.5T / ≤160马力','寒区包、俄语车机'],['二手机会','3年内主流SUV','低里程、VIN与车况可追溯'],['库存纪律','目标≤45天','超过60天调拨或批发退出'],['服务增值','俄语单证+检测','配件前置仓与合作维修站']]},
  bishkek:{title:'比什凯克本地与中亚',big:'129万',caption:'索姆 · Qiyuan Q05挂牌中位价',intro:'本地消费、中亚分销和对俄转口必须分账。传统税差套利空间收窄，低价新能源与家庭插混/增程需要依靠本地零售独立盈利。',facts:[['主销价格','160–245万索姆','约1.83–2.80万美元'],['家庭主力','1.5L插混 / 增程','纯电100–200km'],['山区要求','四驱可选 / ≥180mm','电池加热、底盘护板'],['纯电条件','固定家充优先','关注免税配额与15%关税']]}
};
function renderMarket(key){const m=markets[key];document.querySelector('#market-panel').innerHTML=`<div class="market-intro"><h3>${m.title}</h3><p>${m.intro}</p><div class="big">${m.big} <small>${m.caption}</small></div></div><div class="market-facts">${m.facts.map((f,i)=>`<article class="fact"><span>0${i+1}</span><b>${f[0]} · ${f[1]}</b><p>${f[2]}</p></article>`).join('')}</div>`}
document.querySelectorAll('.market-switch button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.market-switch button').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-selected',b===btn)});renderMarket(btn.dataset.market)}));
renderMarket('russia');
