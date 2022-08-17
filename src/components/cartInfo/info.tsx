import Typography from '../typography'
// import CountUp from 'react-countup'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import AnimatingNumber from 'components/numbrr/animatethatnumberbabe'
import { PADDINGX } from 'constants/layout'


const Info = ({data}) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className={`w-full ${PADDINGX}`}>
      <div className="flex flex-col items-center  md:flex-row max-w-shambWidth mx-auto  pt-36">
        {data.list.map((el) => {
          return (
            <div className="bg-components-30 m-2 headerBpoint:mx-[30px] h-[200px] md:h-[283px] gap-y-3.5 w-[365px] headerBpoint:w-[30%] flex flex-col  items-center rounded-[8px] md:bg-too">
              <Typography variant="h2" className="hidden md:flex flex-col justify-end text-white  h-[50%]">
                <AnimatingNumber value={el.num} suffix={el.suf} className = " h-[67px] m-0 flex flex-row-reverse items-center" />
              </Typography>
              <Typography variant="h4" className="md:hidden text-white">
                <AnimatingNumber value={el.num} suffix={el.suf} className = "" />
              </Typography>
              <Typography variant={matches ? 'p-small' : 'title-small'} className="text-white opacity-50 text-center">
                {el.text}
              </Typography>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Info
