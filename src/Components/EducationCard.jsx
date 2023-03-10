import Stack from "@mui/material/Stack";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function EducationCard({title, timeRangeString, locationString, imgSrc, descriptions}) {
    return (
        <div className="bg-gradient-to-br from-dark-purple to-secondary rounded-md p-5
        max-w-[20rem] md:max-w-[25rem]
        hover:from-primary hover:to-secondary hover:scale-110 transition-all ease-in-out">
            <Stack direction="row" spacing={4}>
                <img src={imgSrc} alt="" className="rounded-full h-20 w-20" />
                <Stack direction="column">
                    <div className="text-white font-bold">{title}</div>
                    <div className="text-white font-thin text-xs">{timeRangeString}</div>
                    <div className="flex mt-1">
                        <LocationOnIcon sx={{fontSize: 16}}/>
                        <div className="text-white text-xs font-thin">{locationString}</div>
                    </div>
                    
                    <ul className="ml-4 mt-5 list-disc">
                    {
                        descriptions.map((desc) => { 
                            return <li className="text-white">{desc}</li>;
                        })
                    } 
                    </ul>
                </Stack>
            </Stack>
        </div>
    );
}