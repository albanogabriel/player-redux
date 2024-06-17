import { useAppSelector } from "../store"

export function Header(){
  const { currentModule, currentLesson } = useAppSelector(store => {
    const { currentModuleIndex, currentLessonIndex, course } = store.player

    const currentModule = course.modules[currentModuleIndex]
    const currentLesson = course.modules[currentModuleIndex].lessons[currentLessonIndex]

    return { currentModule, currentLesson }
  })

  return(
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
      <span className="text-sm text-zinc-400">Módulo {currentModule.title}</span>
    </div>
  )
}