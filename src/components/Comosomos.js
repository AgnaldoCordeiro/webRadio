import Image from 'next/image' 

export default function Comosomos() {
    return (
        <div className={`
        bg-blue-300
        text-white
        
        `}>
            <div className="container">
                <div className="row">
                    <div className="col s12 m12 l7
                    py-4
                    px-9                    
                    ">
                        <h4>Como somos</h4>
                        <p><i>lorem ipsum dolor sit amet, consectetur adip</i></p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis laudantium praesentium sint id! Soluta beatae doloremque quos repudiandae eos eaque libero tempore corrupti mollitia. Amet possimus quidem aperiam obcaecati vel.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis laudantium praesentium sint id! Soluta beatae doloremque quos repudiandae eos eaque libero tempore corrupti mollitia. Amet possimus quidem aperiam obcaecati vel.</p>
                    </div>
                    <div className="col s12 m12 l5 center
                    py-4
                    px-6                                     
                    ">
                        <img className={`                        
                        `}src="http://www.webradiopraise.com.br/admin/data/img/gallery/Bg/fundo-gradiente-de-tecnologia-big-data_76243-32.jpg" alt="fundo2web"/>
                    </div>
                </div>
            </div>
        </div>

    )
}