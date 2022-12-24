import React from 'react';
import { Box } from '@mui/system';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import VK from './imagesIcons/IconVK.png'
import { IconButton, Typography } from '@mui/material';
import UE from './imagesIcons/IconUE.png';
import EG from './imagesIcons/IconEG.png';
import './Footer.css'
import { useNavigate } from 'react-router-dom';

const resources = ['Поддержка авторов','Опубликовать на Epic Games','Вакансии','Компания'];
const piece1 = ['Правила для неофициальных материалов','Исследование пользательского опыта','Лицензионное соглашение с конечным пользователем магазина']
const piece2 = ['Сетевые службы','Правила сообщества','Epic Newsroom'];
const creators1 = ['Battle Breakers','Fortnite','Infinity Blade'];
const creators2 = ['Robo Recall','  Shadow Complex','Unreal Tournament'];
const end = ['Условия предоставления услуг','Политика конфиденциальности','Правила возврата магазина']


const Footer = () => {
    

    return (
        <div>
            <Box className="Footer" sx={{backgroundColor: '#2e2e2e'}}>
                <Box sx={{width: '90%', margin: 'auto'}}>
                <Box className="Icons" sx={{display:'flex', justifyContent:'space-between', paddingTop: '30px', pb: '30px'}}>
                    
                    <Box>
                    <IconButton className='img'>
                        <img src={VK} alt="" className='img' />
                    </IconButton>
                    <IconButton>
                        <TelegramIcon sx={{ color: 'black', backgroundColor: 'white', borderRadius: '25px', width: '35px', height: '30px' }} />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon sx={{ color: 'white',  width: '30px', height: '30px' }} />
                    </IconButton>
                    </Box>

                    <IconButton>
                        <KeyboardArrowUpOutlinedIcon onClick={() => {window.scrollTo({
        top: 0,  
        behavior: 'smooth'  
    })}} className='Arrow' sx={{ color: 'white',  width: '30px', height: '30px', border: '1px solid white', borderRadius: '5px' }} />
                    </IconButton>
                </Box>
                <Box className="Resource">
                    <Box className="Block1" sx={{display: 'flex', flexDirection:'column', pb: '30px'}}>
                        <Typography sx={{fontWeight:'bold', color: 'rgb(80, 80, 80)' }}>Ресурсы</Typography>
                        
                        <Box>
                            {resources.map((resource) => (
                                <Typography className='buttons' key={resource} sx={{fontWeight:'bold', mt: '5px', color: 'white'}} >{resource}</Typography>
                            ))}
                        </Box>
                        

                    </Box>
                    <Box className="Block2" sx={{display: 'flex'}}>
                        <Box className="Piece1">
                            {piece1.map((piece) => (
                                <Typography className='buttons' key={piece} sx={{fontWeight:'bold', mt: '5px', color: 'white', mr: '20px'}} >{piece}</Typography>
                            ))}
                        </Box>
                        <Box className="Piece2">
                            {piece2.map((piece) => (
                                <Typography className='buttons' key={piece} sx={{fontWeight:'bold', mt: '5px', color: 'white'}} >{piece}</Typography>
                            ))}
                        </Box>
                    </Box>
                </Box>
                <Box className="Creators" sx={{my:'20px'}}>
                      <Typography sx={{fontWeight:'bold', color: 'rgb(80, 80, 80)' }}>Ресурсы</Typography>
                     <Box sx={{display: 'flex'}}>
                     <Box className="Piece1">
                            {creators1.map((piece) => (
                                <Typography className='buttons' key={piece} sx={{fontWeight:'bold', mt: '5px', color: 'white', mr: '20px'}} >{piece}</Typography>
                            ))}
                      </Box>
                      <Box className="Piece2">
                            {creators2.map((piece) => (
                                <Typography className='buttons' key={piece} sx={{fontWeight:'bold', mt: '5px', color: 'white'}} >{piece}</Typography>
                            ))}
                       </Box>
                     </Box>
                </Box>
                <Box maxWidth='xl' sx={{my:'30px', border: 'gray solid 1px'}} />
                <Box className="Description" sx={{mb: '50px'}}>
                                    <Typography sx={{fontWeight:'500', mt: '5px', color: 'white'}}>
                                        © 2022, Epic Games, Inc. Все права сохранены. Epic, Epic Games, логотип Epic Games, Fortnite, логотип Fortnite, Unreal, Unreal Engine, логотип Unreal Engine, Unreal Tournament и логотип Unreal Tournament являются товарными знаками или зарегистрированными товарными знаками Epic Games, Inc. в США и во всём остальном мире. Все прочие марки и наименования продукции являются товарными знаками соответствующих владельцев. Финансовые операции за пределами США проводятся через Epic Games International, S.à r.l.   
                                    </Typography>
                </Box>
                <Box className="End" sx={{display: 'flex', justifyContent: 'space-between'}}>
                                <Box sx={{display: 'flex'}}>
                                 {end.map((end) => (
                                 <Typography className='buttons' key={end} sx={{ mr: '20px', mt: '5px', color: 'white'}} >{end}</Typography>
                                ))}
                                </Box>
                                <Box>
                                 <img src={EG} alt="" className="img1" /><img src={UE} alt="" className="img1" />
                                </Box>
                </Box>
                </Box>
            </Box>
        </div>
    );
};

export default Footer;