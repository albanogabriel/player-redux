import { PlayCircle, Video } from "lucide-react";

interface LessonProps {
  title: string
  duration: string
  onPlay: () => void
  isCurrentLessonActive: boolean
}

export function Lesson({ title, duration, onPlay, isCurrentLessonActive = false }: LessonProps){
  return(
    <button 
      onClick={onPlay}
      data-active={isCurrentLessonActive}
      disabled={isCurrentLessonActive}  
      className={`flex items-center gap-3 text-sm ${isCurrentLessonActive ? 'text-emerald-400' : 'text-zinc-400 hover:text-zinc-100'}`}
    >
      {isCurrentLessonActive ? (
        <PlayCircle className='w-4 h4 text-emerald-500'/>
      ) : (
        <Video className='w-4 h4 text-zinc-500'/>
      )}
      <span>{title}</span>
      <span className={`ml-auto font-monos text-xs `}>{duration}</span>
    </button>
  )
}

// Validation, isCurrentLessonActive with data atributes

// export function Lesson({ title, duration, onPlay, isCurrentLessonActive = false }: LessonProps){
//   return(
//     <button 
//       onClick={onPlay}
//       data-active={isCurrentLessonActive}
//       disabled={isCurrentLessonActive}  
//       className={`flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100`}
//     >
//       {isCurrentLessonActive ? (
//         <PlayCircle className='w-4 h4 text-emerald-500'/>
//       ) : (
//         <Video className='w-4 h4 text-zinc-500'/>
//       )}
//       <span>{title}</span>
//       <span className={`ml-auto font-monos text-xs `}>{duration}</span>
//     </button>
//   )
// }