import { computed, defineComponent } from "vue";
import "./editor.scss"
import editorBlock from "./editor-block";
export default defineComponent(
    {   
        props: {
            modelValue: { type:Object }
        },
        setup(props){

            const data = computed({
                get(){
                    return props.modelValue
                }
            });
            const containerStyles =computed(()=>({
                width:data.value.container.width+'px',
                height:data.value.container.height+'px'
            }))

            return()=><div class="editor">
              <div class="editor-left">左侧物料区</div>
              <div class="editor-top">菜单栏</div>
              <div class="editor-right">属性控制</div>
              <div class="editor-container">
                {/*产生滚动条*/}
                    <div class="editor-container-canvas">
                       {/* */}
                       <div class="editor-container-canvas__content" style={containerStyles.value}>
                            {
                                (data.value.blocks.map(blocks=>(
                                 <editorBlock></editorBlock>
                               )))
                            }
                       </div>
                    </div>

              </div>
              </div>//相当于返回后面的值
        }
    }
)