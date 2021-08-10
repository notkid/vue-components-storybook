<template>
    <div class="modal" v-show="show" transition="fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <!--头部-->
                <div class="modal-header">
                    <slot name="header">
                        <p class="title">{{modal.title}}</p>
                    </slot>
                    <a v-touch:tap="close(0)" class="close" href="javascript:void(0)"></a>
                </div>
                <!--内容区域-->
                <div class="modal-body">
                    <slot name="body">
                        <p class="notice">{{modal.text}}</p>
                    </slot>
                </div>
                <!--尾部,操作按钮-->
                <div class="modal-footer">
                    <slot name="button">
                        <a v-if="modal.showCancelButton" href="javascript:void(0)" class="button {{modal.cancelButtonClass}}" v-touch:tap="close(1)">{{modal.cancelButtonText}}</a>
                        <a v-if="modal.showConfirmButton" href="javascript:void(0)" class="button {{modal.confirmButtonClass}}" v-touch:tap="submit">{{modal.confirmButtonText}}</a>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template> 

<script>
export default {
	name:'m-model',
}
</script>
