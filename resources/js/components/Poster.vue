<template>
  <div class="p-4">
    <div class="p-4">
      <h4 class="text-2xl font-semibold">Poster</h4>
    </div>
    <div class="flex justify-end px-4">
      <button
        @click="showCreateModal = true"
        type="button"
        class="
          w-full
          inline-flex
          justify-center
          rounded-md
          border border-transparent
          shadow-sm
          px-4
          py-2
          bg-green-600
          text-base
          font-medium
          text-white
          hover:bg-green-700
          focus:outline-none
          focus:ring-2 focus:ring-offset-2 focus:ring-green-500
          sm:ml-3
          sm:w-auto
          sm:text-sm
        "
      >
        <i class="fa fa-plus" aria-hidden="true"></i>
      </button>
      <!-- This example requires Tailwind CSS v2.0+ -->
      <transition name="fade">
        <div
          v-show="showCreateModal"
          class="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            class="
              flex
              items-end
              justify-center
              min-h-screen
              pt-4
              px-4
              pb-20
              text-center
              sm:block
              sm:p-0
            "
          >
            <!--
            Background overlay, show/hide based on modal state.

            Entering: "ease-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100"
              To: "opacity-0"
          -->
            <div
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>

            <!-- This element is to trick the browser into centering the modal contents. -->
            <span
              class="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
              >&#8203;</span
            >

            <!--
            Modal panel, show/hide based on modal state.

            Entering: "ease-out duration-300"
              From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100 translate-y-0 sm:scale-100"
              To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          -->
            <div
              class="
                inline-block
                align-bottom
                bg-white
                rounded-lg
                text-left
                overflow-hidden
                shadow-xl
                transform
                transition-all
                sm:my-8
                sm:align-middle
                sm:max-w-lg
                sm:w-full
              "
            >
              <div class="flex justify-end p-2">
                <i @click="showCreateModal = false" class="fas fa-times"></i>
              </div>
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div
                    class="
                      mx-auto
                      flex-shrink-0 flex
                      items-center
                      justify-center
                      h-12
                      w-12
                      rounded-full
                      bg-red-100
                      sm:mx-0
                      sm:h-10
                      sm:w-10
                    "
                  >
                    <!-- Heroicon name: outline/exclamation -->
                    <svg
                      class="h-6 w-6 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      class="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Deactivate account
                    </h3>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        Are you sure you want to deactivate your account? All of
                        your data will be permanently removed. This action
                        cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
              >
                <button
                  type="button"
                  class="
                    w-full
                    inline-flex
                    justify-center
                    rounded-md
                    border border-transparent
                    shadow-sm
                    px-4
                    py-2
                    bg-red-600
                    text-base
                    font-medium
                    text-white
                    hover:bg-red-700
                    focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-red-500
                    sm:ml-3
                    sm:w-auto
                    sm:text-sm
                  "
                >
                  Deactivate
                </button>
                <button
                  type="button"
                  class="
                    mt-3
                    w-full
                    inline-flex
                    justify-center
                    rounded-md
                    border border-gray-300
                    shadow-sm
                    px-4
                    py-2
                    bg-white
                    text-base
                    font-medium
                    text-gray-700
                    hover:bg-gray-50
                    focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                    sm:mt-0
                    sm:ml-3
                    sm:w-auto
                    sm:text-sm
                  "
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div>
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="p-4 flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="
                shadow
                overflow-hidden
                border-b border-gray-200
                sm:rounded-lg
              "
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Role
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img
                            class="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                            alt=""
                          />
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            Jane Cooper
                          </div>
                          <div class="text-sm text-gray-500">
                            jane.cooper@example.com
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        Regional Paradigm Technician
                      </div>
                      <div class="text-sm text-gray-500">Optimization</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span
                        class="
                          px-2
                          inline-flex
                          text-xs
                          leading-5
                          font-semibold
                          rounded-full
                          bg-green-100
                          text-green-800
                        "
                      >
                        Active
                      </span>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      Admin
                    </td>
                    <td
                      class="
                        px-6
                        py-4
                        whitespace-nowrap
                        text-right text-sm
                        font-medium
                      "
                    >
                      <button
                        @click="showUpdateModal = true"
                        type="button"
                        class="
                          w-full
                          inline-flex
                          justify-center
                          rounded-md
                          border border-transparent
                          shadow-sm
                          px-4
                          py-2
                          bg-blue-600
                          text-base
                          font-medium
                          text-white
                          hover:bg-blue-700
                          focus:outline-none
                          focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                          sm:ml-3
                          sm:w-auto
                          sm:text-sm
                        "
                      >
                        <i class="fas fa-edit"></i>
                      </button>
                      <!-- This example requires Tailwind CSS v2.0+ -->
                      <transition name="fade">
                        <div
                          v-show="showUpdateModal"
                          class="fixed z-10 inset-0 overflow-y-auto"
                          aria-labelledby="modal-title"
                          role="dialog"
                          aria-modal="true"
                        >
                          <div
                            class="
                              flex
                              items-end
                              justify-center
                              min-h-screen
                              pt-4
                              px-4
                              pb-20
                              text-center
                              sm:block
                              sm:p-0
                            "
                          >
                            <!--
            Background overlay, show/hide based on modal state.

            Entering: "ease-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100"
              To: "opacity-0"
          -->
                            <div
                              class="
                                fixed
                                inset-0
                                bg-gray-500 bg-opacity-75
                                transition-opacity
                              "
                              aria-hidden="true"
                            ></div>

                            <!-- This element is to trick the browser into centering the modal contents. -->
                            <span
                              class="
                                hidden
                                sm:inline-block
                                sm:align-middle
                                sm:h-screen
                              "
                              aria-hidden="true"
                              >&#8203;</span
                            >

                            <!--
            Modal panel, show/hide based on modal state.

            Entering: "ease-out duration-300"
              From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100 translate-y-0 sm:scale-100"
              To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          -->
                            <div
                              class="
                                inline-block
                                align-bottom
                                bg-white
                                rounded-lg
                                text-left
                                overflow-hidden
                                shadow-xl
                                transform
                                transition-all
                                sm:my-8
                                sm:align-middle
                                sm:max-w-lg
                                sm:w-full
                              "
                            >
                              <div class="flex justify-end p-2">
                                <i
                                  @click="showUpdateModal = false"
                                  class="fas fa-times"
                                ></i>
                              </div>
                              <div
                                class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
                              >
                                <div class="sm:flex sm:items-start">
                                  <div
                                    class="
                                      mx-auto
                                      flex-shrink-0 flex
                                      items-center
                                      justify-center
                                      h-12
                                      w-12
                                      rounded-full
                                      bg-red-100
                                      sm:mx-0
                                      sm:h-10
                                      sm:w-10
                                    "
                                  >
                                    <!-- Heroicon name: outline/exclamation -->
                                    <svg
                                      class="h-6 w-6 text-red-600"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    class="
                                      mt-3
                                      text-center
                                      sm:mt-0
                                      sm:ml-4
                                      sm:text-left
                                    "
                                  >
                                    <h3
                                      class="
                                        text-lg
                                        leading-6
                                        font-medium
                                        text-gray-900
                                      "
                                      id="modal-title"
                                    >
                                      Deactivate account
                                    </h3>
                                    <div class="mt-2">
                                      <p class="whitespace-normal text-sm text-gray-500">
                                        Are you sure you want to deactivate your
                                        account? All of your data will be
                                        permanently removed. This action cannot
                                        be undone.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="
                                  bg-gray-50
                                  px-4
                                  py-3
                                  sm:px-6
                                  sm:flex sm:flex-row-reverse
                                "
                              >
                                <button
                                  type="button"
                                  class="
                                    w-full
                                    inline-flex
                                    justify-center
                                    rounded-md
                                    border border-transparent
                                    shadow-sm
                                    px-4
                                    py-2
                                    bg-red-600
                                    text-base
                                    font-medium
                                    text-white
                                    hover:bg-red-700
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-offset-2
                                    focus:ring-red-500
                                    sm:ml-3
                                    sm:w-auto
                                    sm:text-sm
                                  "
                                >
                                  Deactivate
                                </button>
                                <button
                                  type="button"
                                  class="
                                    mt-3
                                    w-full
                                    inline-flex
                                    justify-center
                                    rounded-md
                                    border border-gray-300
                                    shadow-sm
                                    px-4
                                    py-2
                                    bg-white
                                    text-base
                                    font-medium
                                    text-gray-700
                                    hover:bg-gray-50
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-offset-2
                                    focus:ring-indigo-500
                                    sm:mt-0
                                    sm:ml-3
                                    sm:w-auto
                                    sm:text-sm
                                  "
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </transition>

                      <button
                        @click="showDeleteModal = true"
                        type="button"
                        class="
                          w-full
                          inline-flex
                          justify-center
                          rounded-md
                          border border-transparent
                          shadow-sm
                          px-4
                          py-2
                          bg-red-600
                          text-base
                          font-medium
                          text-white
                          hover:bg-red-700
                          focus:outline-none
                          focus:ring-2 focus:ring-offset-2 focus:ring-red-500
                          sm:ml-3
                          sm:w-auto
                          sm:text-sm
                        "
                      >
                        <i class="fa fa-trash" aria-hidden="true"></i>
                      </button>
                      <!-- This example requires Tailwind CSS v2.0+ -->
                      <transition name="fade">
                        <div
                          v-show="showDeleteModal"
                          class="fixed z-10 inset-0 overflow-y-auto"
                          aria-labelledby="modal-title"
                          role="dialog"
                          aria-modal="true"
                        >
                          <div
                            class="
                              flex
                              items-end
                              justify-center
                              min-h-screen
                              pt-4
                              px-4
                              pb-20
                              text-center
                              sm:block
                              sm:p-0
                            "
                          >
                            <!--
            Background overlay, show/hide based on modal state.

            Entering: "ease-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100"
              To: "opacity-0"
          -->
                            <div
                              class="
                                fixed
                                inset-0
                                bg-gray-500 bg-opacity-75
                                transition-opacity
                              "
                              aria-hidden="true"
                            ></div>

                            <!-- This element is to trick the browser into centering the modal contents. -->
                            <span
                              class="
                                hidden
                                sm:inline-block
                                sm:align-middle
                                sm:h-screen
                              "
                              aria-hidden="true"
                              >&#8203;</span
                            >

                            <!--
            Modal panel, show/hide based on modal state.

            Entering: "ease-out duration-300"
              From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100 translate-y-0 sm:scale-100"
              To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          -->
                            <div
                              class="
                                inline-block
                                align-bottom
                                bg-white
                                rounded-lg
                                text-left
                                overflow-hidden
                                shadow-xl
                                transform
                                transition-all
                                sm:my-8
                                sm:align-middle
                                sm:max-w-lg
                                sm:w-full
                              "
                            >
                              <div class="flex justify-end p-2">
                                <i
                                  @click="showDeleteModal = false"
                                  class="fas fa-times"
                                ></i>
                              </div>
                              <div
                                class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
                              >
                                <div class="sm:flex sm:items-start">
                                  <div
                                    class="
                                      mx-auto
                                      flex-shrink-0 flex
                                      items-center
                                      justify-center
                                      h-12
                                      w-12
                                      rounded-full
                                      bg-red-100
                                      sm:mx-0
                                      sm:h-10
                                      sm:w-10
                                    "
                                  >
                                    <!-- Heroicon name: outline/exclamation -->
                                    <svg
                                      class="h-6 w-6 text-red-600"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    class="
                                      mt-3
                                      text-center
                                      sm:mt-0
                                      sm:ml-4
                                      sm:text-left
                                    "
                                  >
                                    <h3
                                      class="
                                        text-lg
                                        leading-6
                                        font-medium
                                        text-gray-900
                                      "
                                      id="modal-title"
                                    >
                                      Deactivate account
                                    </h3>
                                    <div class="mt-2">
                                      <p class="whitespace-normal text-sm text-gray-500">
                                        Are you sure you want to deactivate your
                                        account? All of your data will be
                                        permanently removed. This action cannot
                                        be undone.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="
                                  bg-gray-50
                                  px-4
                                  py-3
                                  sm:px-6
                                  sm:flex sm:flex-row-reverse
                                "
                              >
                                <button
                                  type="button"
                                  class="
                                    w-full
                                    inline-flex
                                    justify-center
                                    rounded-md
                                    border border-transparent
                                    shadow-sm
                                    px-4
                                    py-2
                                    bg-red-600
                                    text-base
                                    font-medium
                                    text-white
                                    hover:bg-red-700
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-offset-2
                                    focus:ring-red-500
                                    sm:ml-3
                                    sm:w-auto
                                    sm:text-sm
                                  "
                                >
                                  Deactivate
                                </button>
                                <button
                                  type="button"
                                  class="
                                    mt-3
                                    w-full
                                    inline-flex
                                    justify-center
                                    rounded-md
                                    border border-gray-300
                                    shadow-sm
                                    px-4
                                    py-2
                                    bg-white
                                    text-base
                                    font-medium
                                    text-gray-700
                                    hover:bg-gray-50
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-offset-2
                                    focus:ring-indigo-500
                                    sm:mt-0
                                    sm:ml-3
                                    sm:w-auto
                                    sm:text-sm
                                  "
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </transition>
                    </td>
                  </tr>

                  <!-- More people... -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCreateModal: false,
      showUpdateModal: false,
      showDeleteModal: false,
    };
  },
  mounted() {
    console.log("Poster component mounted");
  },
};
</script>

<style scoped>
.fa-times:hover {
  cursor: pointer;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
