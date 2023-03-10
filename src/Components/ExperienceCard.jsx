import Stack from "@mui/material/Stack";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ExperienceCard({title, timeRangeString, locationString, companyName, imgSrc, description}) {
    return (
        <div className="bg-gradient-to-tr from-dark-purple to-dark-purple hover:border hover:border-tertiary rounded-lg p-5
        max-w-[20rem] md:max-w-[26rem]
        shadow-xl   
        hover:from-dark-purple hover:to-dark-secondary hover:scale-110 transition-all ease-in-out">
            <Stack direction="row" spacing={4}>
                <img src={imgSrc} alt="" className="rounded-full h-20 w-20 border-2 border-white" />
                <Stack direction="column">
                    <div className="text-white font-bold">{title}</div>
                    <div className="text-white font-thin text-xs">{timeRangeString}</div>
                    <div className="flex mt-1">
                        <LocationOnIcon sx={{fontSize: 16}}/>
                        <div className="text-white text-xs font-thin">{locationString}</div>
                    </div>
                    <i className="text-bold mt-4">{companyName}</i>                    
                </Stack>
            </Stack>
            <div className="mt-5 text-justify text-sm">{description}</div>
        </div>
    );
}