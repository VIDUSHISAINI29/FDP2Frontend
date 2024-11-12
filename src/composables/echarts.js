import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { LineChart,PieChart } from 'echarts/charts'

import {
  DatasetComponent,
  GridComponent,
  VisualMapComponent,
  TooltipComponent,
  TitleComponent,
  ToolboxComponent,
  DataZoomComponent,
  LegendComponent
} from 'echarts/components'
import { SVGRenderer } from 'echarts/renderers'

export function setupEcharts(){
    use([
        DatasetComponent,
        GridComponent,
        VisualMapComponent,
        BarChart,
        SVGRenderer,
        TooltipComponent,
        TitleComponent,
        ToolboxComponent,
        DataZoomComponent,
        LineChart,
      ])      
}





