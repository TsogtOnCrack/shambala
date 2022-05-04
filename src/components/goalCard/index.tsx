import Typography from 'components/typography'
import { } from 'react'

type Props = {
    index: string,
    desc: string,
}

const GoalCard = (props: Props) => {
    const { index, desc } = props

    return <div className='w-[397px] flex pl-4 mb-[76px]'>
        <Typography variant='title-big' className='text-[#646464] opacity-70 mr-4'>{index}</Typography>
        <Typography variant='body-web' className='text-primary-white font-normal'>{desc}</Typography>
    </div >

}

export default GoalCard;