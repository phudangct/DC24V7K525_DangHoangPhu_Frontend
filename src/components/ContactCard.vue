<script>
export default {
    props: {
        contact: { type: Object, required: true },
    },
};
</script>

<template>
    <div>

        <div class="p-1">
            <strong>Tên:</strong>
            {{ contact.name }}
        </div>

        <div class="p-1">
            <strong>E-mail:</strong>
            {{ contact.email }}
        </div>

        <div class="p-1">
            <strong>Địa chỉ:</strong>
            {{ contact.address }}
        </div>

        <div class="p-1">
            <strong>Điện thoại:</strong>
            {{ contact.phone }}
        </div>

        <div class="p-1">
            <strong>Liên hệ yêu thích:</strong>

            <i v-if="contact.favorite" class="fas fa-check text-success"></i>

            <i v-else class="fas fa-times text-danger"></i>

        </div>


        <div class="p-1">

            <strong>Sở thích:</strong>

            <div v-if="contact.hobbies && contact.hobbies.length">

                <span v-for="(hobby, index) in contact.hobbies" :key="index" class="badge badge-info mr-2">
                    {{ hobby }}
                </span>

            </div>

            <span v-else>
                Chưa có sở thích
            </span>

        </div>

    </div>
</template>